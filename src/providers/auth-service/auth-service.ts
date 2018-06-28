import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{AngularFireAuth}from 'angularfire2/auth';
import * as firebase from 'firebase/app';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  private user:firebase.User

  constructor(public afAuth:AngularFireAuth) {
    console.log('Hello AuthServiceProvider Provider');
    afAuth.authState.subscribe(user=>{
      this.user=user
    })
  }


  signInWithEmail(credenttials){
    return this.afAuth.auth.signInWithEmailAndPassword(credenttials.email,credenttials.password)

  }
  signUp(credenttials){
    return this.afAuth.auth.createUserWithEmailAndPassword(credenttials.email,credenttials.password)

  }
  signOut(){
    return this.afAuth.auth.signOut()
      }
}
