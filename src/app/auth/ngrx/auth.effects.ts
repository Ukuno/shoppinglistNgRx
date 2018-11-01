import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { fromPromise } from 'rxjs/observable/fromPromise';

import * as AuthAction from './auth.action';
import * as firebase from 'firebase';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class AuthEffects {

  @Effect()
  authSignUp = this.action$.ofType(AuthAction.TRY_SIGNUP)
                           .map((action: AuthAction.TrySignUp) => {
                            return action.payload;
                            })
                           .switchMap((authData: {username: string, password: string}) => {
                            return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
                            })
                           .switchMap( () => {
                            return fromPromise(firebase.auth().currentUser.getIdToken());
                            })
                           .mergeMap((tolken: string) => {
                            return [
                              {
                                type: AuthAction.REGISTER
                              },
                              {
                                type: AuthAction.SET_TOKEN,
                                payload: tolken
                              }
                              ];
                           });
    @Effect()
    authSignIn = this.action$.ofType(AuthAction.TRY_SIGNIN)
                              .map((action: AuthAction.TrySignUp) => {
                                return action.payload;
                                })
                              .switchMap((authData: {username: string, password: string}) => {
                                return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
                                })
                              .switchMap( () => {
                                return fromPromise(firebase.auth().currentUser.getIdToken());
                                })
                              .mergeMap((tolken: string) => {
                                this.route.navigate(['/']);
                                return [
                                  {
                                    type: AuthAction.LOGIN
                                  },
                                  {
                                    type: AuthAction.SET_TOKEN,
                                    payload: tolken
                                  }
                                  ];
                              });
    constructor( private action$: Actions, private route: Router) {}
}

