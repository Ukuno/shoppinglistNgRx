import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
// import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingListAction: Observable<{ingredients: Ingredient[]}>;
  // private subscription: Subscription;

  constructor(private slService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.shoppingListAction = this.store.select('shoppingList');
      // this.subscription = this.slService.ingredientChanged.subscribe(
      //   (ingredient: Ingredient[]) => {
      //     this.ingredients = ingredient;
      //   }
    // );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  // ngOnDestroy() {
  //   // this.subscription.unsubscribe();
  // }

}
