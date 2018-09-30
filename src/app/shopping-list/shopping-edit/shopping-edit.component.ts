import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Store } from '@ngrx/store';
import * as Action from '../ngrx/shopping-list.action';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('submitform') slForm: NgForm;
  subscribtion: Subscription;
  editMode = false;
  editedItemIndex: number;
  editItem: Ingredient;

  constructor(private slService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.subscribtion = this.slService.startedEditing
                        .subscribe(
                          (index: number) => {
                            this.editedItemIndex = index;
                            this.editMode = true;
                            this.editItem = this.slService.getIngredientForEdit(index);
                            this.slForm.setValue({
                              name : this.editItem.name,
                              amount: this.editItem.amount
                            });

                          }
                        );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name , value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      // this.slService.addIngredients([newIngredient]);
      this.store.dispatch(new Action.AddIngredient(newIngredient) );
    }
    this.onRestForm();

  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  onRestForm() {
      this.editMode = false;
      this.slForm.reset();
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onRestForm();
  }

}
