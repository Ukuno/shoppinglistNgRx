import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
         // tslint:disable-next-line:max-line-length
        new Recipe('Italian Salad', 'bring all the vegies on the garden, we will make a masterpiece', 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=bdc9a3b36bf4095dbcb732b9fab087a3'),
        // tslint:disable-next-line:max-line-length
        new Recipe('Da Bologna Pizzeria', 'the delicious pizza de bologna', 'https://static-news.moneycontrol.com/static-mcnews/2017/07/Pizza_food_FMCG_price_hotel_piece1-770x433.jpg')
     ];
    getRecipe() {
        return this.recipes.slice();
    }
}
