import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
// import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataSave {
  constructor( private httpClient: HttpClient, private recipeService: RecipeService) {}


  saveData() {
    // const token = this.authService.getToken();
    // return this.httpClient.put('https://recipe-book-ukuno.firebaseio.com/recipe.json', this.recipeService.getRecipe(), {
    //   params: new HttpParams().set('auth', token)
    // });
    const req = new HttpRequest('PUT', 'https://recipe-book-ukuno.firebaseio.com/recipe.json', this.recipeService.getRecipe());
    return this.httpClient.request(req);
  }
  fetchData() {
    // const token = this.authService.getToken();
    return this.httpClient.get<Recipe[]>('https://recipe-book-ukuno.firebaseio.com/recipe.json')
    .map(
      (recipes) => {
        // const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipe(recipes);
      }
    );
  }
}
