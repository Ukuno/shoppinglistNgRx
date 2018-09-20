import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataSave {
  constructor( private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

  saveData() {
    return this.http.put('https://recipe-book-ukuno.firebaseio.com/recipe.json', this.recipeService.getRecipe());
  }
  fetchData() {
    const token = this.authService.getToken();
    return this.http.get('https://recipe-book-ukuno.firebaseio.com/recipe.json?auth=' + token)
    .pipe(map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
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
