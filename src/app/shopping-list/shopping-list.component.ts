import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs/Observable';
import * as fromReducer from './ngrx/shopping-list.reducer';
import * as Action from './ngrx/shopping-list.action';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingListAction: Observable<{ingredients: Ingredient[]}>;

  constructor(private slService: ShoppingListService, private store: Store<fromReducer.AppState>) { }

  ngOnInit() {
    this.shoppingListAction = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new Action.StartEdit(index));
    // this.slService.startedEditing.next(index);
  }


}
