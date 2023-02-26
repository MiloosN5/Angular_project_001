import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('myForm') signupForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.signupForm);
  }

}

