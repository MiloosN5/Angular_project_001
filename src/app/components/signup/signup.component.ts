import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/servers/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('myForm') signupForm: NgForm;

  constructor(
    private _authService: AuthService,
    public dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  /* submit the form */
  onSubmit(form: NgForm) {
    console.log(this.signupForm);
  }

  /* call signup function defined in the auth service */
  signup(email: string, pass: string){
      this._authService.signUp(email, pass);   
  }

}



