import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Banana', 10),
    ];

    getIngredient() {
        return this.ingredients.slice();
    }

    getIngredientForEdit(index: number) {
      return this.ingredients[index];
    }
    addIngredient(newIngredient: Ingredient) {
            this.ingredients.push(newIngredient);
            this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredient: Ingredient[]) {
        this.ingredients.forEach((entry) => {
            for (let i = 0; i < ingredient.length; i++) {
                if (entry.name === ingredient[i].name) {
                    entry.amount += ingredient[i].amount;
                    ingredient.splice(i, 1);
                    return;
                }
            }
        });
        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, ingredient: Ingredient) {
      this.ingredients[index] = ingredient;
      this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientChanged.next(this.ingredients.slice());
    }
}
