import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AppReducer from '../store/app.reducer';
import * as AuthAction from './ngrx/auth.action';

@Injectable()
export class AuthService {

  // token: string;

  constructor(private route: Router, private store: Store<AppReducer.AppState>) {}

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      user => {
        this.store.dispatch(new AuthAction.Register());
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) =>  {
            this.store.dispatch(new AuthAction.SetToken(token));
          }
        );
      }
    )
    .catch(
      error => console.log(error.message)
    );
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      reponse => {
        this.store.dispatch(new AuthAction.LogIn());
        this.route.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) =>  {
            this.store.dispatch(new AuthAction.SetToken(token));
          }
        );
      }
    )
    .catch(
      error => console.log('message', error)
    );
  }

  // getToken() {
  //   firebase.auth().currentUser.getIdToken()
  //   .then(
  //     (token: string) => this.token = token
  //   );
  //   return this.token;
  // }

  // isAuthenticated() {
  //  return this.token != null;
  // }

  isLogOut() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthAction.LogOut());
    this.route.navigate(['/signin']);
  }

}
