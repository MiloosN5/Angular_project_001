import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/servers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('myForm') signupForm: NgForm;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.signupForm);
  }

  login(userEmail: string, password: string){
    this._authService.signIn(userEmail, password);
  }

}

