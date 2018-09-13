import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataSave {
  constructor( private http: Http, private recipeService: RecipeService) {}

  saveData() {
    return this.http.put('https://recipe-book-ukuno.firebaseio.com/recipe.json', this.recipeService.getRecipe());
  }
  fetchData() {
    return this.http.get('https://recipe-book-ukuno.firebaseio.com/recipe.json')
    .pipe(map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        console.log(recipes);
        return recipes;
      }
    ))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipe(recipes);
      }
    );
  }
}
