import { Component, OnInit } from '@angular/core';
import { DataSave } from '../../shared/data-save-service';
import { HttpEvent } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as AppReducer from '../../store/app.reducer';
import * as AuthReducer from '../../auth/ngrx/auth.reducer';
import * as AuthAction from '../../auth/ngrx/auth.action';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authState: Observable<AuthReducer.State>;

  constructor(private dataSave: DataSave, private store: Store<AppReducer.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSave() {
    this.dataSave.saveData()
    .subscribe(
      (response: HttpEvent<object>) => {
      }
    );
  }

  onFetch() {
    this.dataSave.fetchData();
  }

  isLogOut() {
    this.store.dispatch(new AuthAction.LogOut());
  }




}
