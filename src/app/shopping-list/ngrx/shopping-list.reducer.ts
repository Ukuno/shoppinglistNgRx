import * as Action from './shopping-list.action';
import { Ingredient } from '../../Shared/ingredient.model';



const initalState = {
  ingredient: [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 10),
]
};

export function shoppingListReducer(state = initalState, action: Action.ShoppingListAction) {

  switch (action.type) {

    case Action.ADD_INGREDIENT:
          return {
            ...state,
            ingredient: [...state.ingredient, action.payload]
          };
   }
  return state;
  }
