import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AppReduce from '../../store/app.reducer';
import * as AuthAction from '../ngrx/auth.action';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<AppReduce.AppState>) { }

  ngOnInit() {
  }
  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    // this.authService.signInUser(email, password);
    this.store.dispatch(new AuthAction.TrySignIn({username: email, password: password}));
  }

}
