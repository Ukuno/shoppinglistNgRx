import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppReducer from '../store/app.reducer';
import * as AuthReducer from './ngrx/auth.reducer';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppReducer.AppState>) {}

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.authService.isAuthenticated();
    return this.store.select('auth').take(1).map((authState: AuthReducer.State)  => {
        return authState.isAuthenticated;
      });
  }

}
