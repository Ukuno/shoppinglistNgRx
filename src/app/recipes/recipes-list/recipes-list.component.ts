import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

@Output() recipeWasSelected = new EventEmitter<Recipe>();

recipes : Recipe[] = [

	new Recipe('Italian Salad', 'bring all the vegies on the garden, we will make a masterpiece', 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=bdc9a3b36bf4095dbcb732b9fab087a3'),
	new Recipe('Da Bologna Pizzeria', 'the delicious pizza de bologna', 'https://static-news.moneycontrol.com/static-mcnews/2017/07/Pizza_food_FMCG_price_hotel_piece1-770x433.jpg')
	
 ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
   this.recipeWasSelected.emit(recipe);
  }

}
