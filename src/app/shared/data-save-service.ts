import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DataSave {
  constructor( private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}


  saveData() {
    const token = this.authService.getToken();
    return this.httpClient.put('https://recipe-book-ukuno.firebaseio.com/recipe.json', this.recipeService.getRecipe(), {
      params: new HttpParams().set('auth', token)
    });
  }
  fetchData() {
    const token = this.authService.getToken();
    return this.httpClient.get<Recipe[]>('https://recipe-book-ukuno.firebaseio.com/recipe.json', {
      params: new HttpParams().set('auth', token)
    })
    .pipe(map(
      (recipes) => {
        // const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
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
