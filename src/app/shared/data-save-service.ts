import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http } from '@angular/http';

@Injectable()
export class DataSave {
  constructor( private http: Http, private recipe: RecipeService) {}

  saveData() {
    return this.http.put('https://recipe-book-ukuno.firebaseio.com/recipe.json', this.recipe.getRecipe());
  }
}
