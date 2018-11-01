import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AppReduce from '../../store/app.reducer';
import * as AuthAction from '../ngrx/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<AppReduce.AppState>) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    // this.authService.signUpUser(email, password);
    this.store.dispatch(new AuthAction.TrySignUp({username: email, password: password}));

  }

}

