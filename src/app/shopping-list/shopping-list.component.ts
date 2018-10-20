import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';
import { Observable } from 'rxjs/Observable';
import * as Action from './ngrx/shopping-list.action';
import * as AppReducer from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingListAction: Observable<{ingredients: Ingredient[]}>;

  constructor(private store: Store<AppReducer.AppState>) { }

  ngOnInit() {
    this.shoppingListAction = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new Action.StartEdit(index));
  }


}
