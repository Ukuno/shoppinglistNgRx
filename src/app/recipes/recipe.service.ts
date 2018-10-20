import { Injectable, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { DataSave } from '../shared/data-save-service';
import { Store } from '@ngrx/store';
import * as Action from '../shopping-list/ngrx/shopping-list.action';
import * as AppReducer from '../store/app.reducer';

@Injectable()
export class RecipeService implements OnInit {
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
    new Recipe(
            'Italian Salad',
            'bring all the vegies on the garden, we will make a masterpiece',
            // tslint:disable-next-line:max-line-length
            'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=bdc9a3b36bf4095dbcb732b9fab087a3',
        [
            new Ingredient('cheese', 5),
            new Ingredient('tomatoes', 4),
            new Ingredient('lettuce', 2),
            new Ingredient('potatoes', 2)
        ]),
     new Recipe(
        'Da Bologna Pizzeria',
        'the delicious pizza de bologna',
        'https://static-news.moneycontrol.com/static-mcnews/2017/07/Pizza_food_FMCG_price_hotel_piece1-770x433.jpg',
    [
        new Ingredient('tomatoes', 10),
        new Ingredient('cheese', 5),
        new Ingredient('Mushrooms', 2)
    ])
     ];

     constructor(private store: Store<AppReducer.AppState>) {}
     ngOnInit() {
     }
     setRecipe(fetchedRecipe: Recipe[]) {
       this.recipes = fetchedRecipe;
       this.recipeChanged.next(this.recipes.slice());
     }
    getRecipe() {
        return this.recipes.slice();
    }

    getRecipeById(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
      // this.slService.addIngredients(ingredients);
      console.log(this.store.select('shoppingList'));
      this.store.dispatch(new Action.AddMultiIngredients(ingredients));
  }

    addRecipe(newRecipe: Recipe) {
      this.recipes.push(newRecipe);
      this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipeChanged.next(this.recipes.slice());
    }
}
