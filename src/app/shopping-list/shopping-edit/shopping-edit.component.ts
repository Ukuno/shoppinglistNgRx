import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model';
import { Store } from '@ngrx/store';
import * as Action from '../ngrx/shopping-list.action';
import * as AppReducer from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('submitform') slForm: NgForm;
  subscribtion: Subscription;
  editMode = false;
  editItem: Ingredient;

  constructor(private store: Store<AppReducer.AppState>) { }

  ngOnInit() {

    this.subscribtion = this.store.select('shoppingList')
                        .subscribe(
                          data => {
                            if (data.editedIngredientIndex > -1) {
                              this.editItem = data.editedIngredient;
                              this.editMode = true;
                              this.slForm.setValue({
                                name : this.editItem.name,
                                amount: this.editItem.amount
                              });
                            } else {
                              this.editMode = false;
                            }
                          }
                        );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name , value.amount);
    if (this.editMode) {
      this.store.dispatch(new Action.UpdateIngredient({ingredent : newIngredient}));
    } else {
      this.store.dispatch(new Action.AddIngredient(newIngredient) );
    }
    this.onRestForm();

  }

  ngOnDestroy() {
    this.store.dispatch(new Action.StopEdit());
    this.subscribtion.unsubscribe();
  }

  onRestForm() {
      this.editMode = false;
      this.slForm.reset();
  }

  onDelete() {
    this.store.dispatch(new Action.DeleteIngredient());
    this.onRestForm();
  }

}
