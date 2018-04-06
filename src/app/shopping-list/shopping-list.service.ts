import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {
    ingredientChangd = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Banana', 10),
    ];

    getIngridents() {
        return this.ingredients.slice();
    }
    addIngrident(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientChangd.emit(this.ingredients.slice());
    }
}
