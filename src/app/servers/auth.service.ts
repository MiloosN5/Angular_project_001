import { Injectable, Input, NgZone } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    // dependencies injection
    public angularFirestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    public router: Router,
    public dialog: MatDialog
  ) { 
    /* subscribe to authState */
    this.angularFireAuth.authState.subscribe((user)=>{
      if(this.router.url !== "/signup") {
        /* if user is loggedin, set his data into the localStorage; if user is loggedout set it to null */ 
        if(user){
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
        }
        else{
          localStorage.setItem('user', 'null');
        }
      }
    })
  }

  /* authtenticate user when registering */
  signUp(email: string, pass: string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email, pass)
    .then((result)=>{
      this.sendVerificationEmail(); // call function that inform user that his confirmation mail is send
      this.setUserData(result.user);
      /* when user register, open dialog (popup window) for informing about verifying email and option to redirect to login */
      const dialogRef = this.dialog.open(SignUpMessageComponent); // open sign-up-message component in the signupcomponent route
      dialogRef.afterClosed().subscribe(result => {
        /* after closing dialog window, navigate user to login route if he click the login button (button has matDialogClose="yes") */
        if(result === "yes") {
          this.router.navigate(['login']);
        }
      });
    })
    .catch((error)=>{
      window.alert(error.message);
    })
  }

  /* send confirmation email to user using firebase method "sendEmailVertification()" */
  sendVerificationEmail(){
    return this.angularFireAuth.currentUser
    .then((u: any)=> u.sendEmailVerification())
  }

  /* set user data */
  setUserData(user: any){
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(
      `users/${user.uid}`
    );

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified
    };

    return userRef.set(userData,{
      merge: true
    });
  }

  /* sign in; if is valid, navigate user to the home and set data; if login is invalid, inform user about error */
  signIn(email: string, pass: string){
    return this.angularFireAuth.signInWithEmailAndPassword(email, pass)
    .then((result)=>{
      this.router.navigate(['/']);
      this.setUserData(result.user);
    })
    .catch((error)=>{
      window.alert(error.message);
    })
  }

  /* check if user is loggedin or not */
  get isLoggedIn(): boolean{
    const user = JSON.parse(localStorage.getItem('user')!);
    let isLogged = false;
    let emailVerified = false;
    if(user?.emailVerified) {
      emailVerified = true;
    }
    if(user != null && emailVerified){
      return true;
    }
    else{
      return false;
    }
  }

  /* if user signout, remove user from the localstorage and navigate him to the home */
  signOut(){
    return this.angularFireAuth.signOut().then(()=>{
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    })
  }
}
