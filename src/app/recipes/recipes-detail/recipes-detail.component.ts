import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as AppReducer from '../../store/app.reducer';
import * as AuthReducer from '../../auth/ngrx/auth.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;
  authState: Observable<AuthReducer.State>;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<AppReducer.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
    const id = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    );
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
    this.router.navigate(['shopping-list']);
  }
  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ondeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipe']);
  }



}
