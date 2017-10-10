import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  email: string = "";
  password: string = "";

  constructor(private auth: AuthService) {
  }

  login(){
    this.auth.login(this.email,this.password);
  }

  isSignedIn(){
    return this.auth.isSignedIn();
  }

}
