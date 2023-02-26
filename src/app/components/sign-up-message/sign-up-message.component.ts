import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servers/auth.service';

@Component({
  selector: 'app-sign-up-message',
  templateUrl: './sign-up-message.component.html',
  styleUrls: ['./sign-up-message.component.css']
})
export class SignUpMessageComponent implements OnInit {

  constructor(
    public authService: AuthService,
  ) {}

  ngOnInit(): void {
  }

  sendVerificationEmail(){
    this.authService.sendVerificationEmail();
  }

}
