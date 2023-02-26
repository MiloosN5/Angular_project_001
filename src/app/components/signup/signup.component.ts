import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('myForm') signupForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  /* submit the form */
  onSubmit(form: NgForm) {
    console.log(this.signupForm);
  }

}




