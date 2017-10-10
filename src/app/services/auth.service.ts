import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private service: AngularFireAuth) { 

  }

  login(name: string, pass: string){
    this.service.auth.signInWithEmailAndPassword(name,pass);
  }

  isSignedIn(){
   
    return this.service.auth.currentUser!=null;
  }

  


}
