import * as Action from './shopping-list.action';
import { Ingredient } from '../../shared/ingredient.model';



const initialState = {
  ingredients: [
    new Ingredient('Apple', 50),
    new Ingredient('Banana', 10),
]
};

export function shoppingListReducer(state = initialState, action: Action.ShoppingListAction) {

  switch (action.type) {

    case Action.ADD_INGREDIENT:
          return {
            ...state,
            ingredients: [...state.ingredients, action.payload]
          };
    case Action.ADD_MULTI_INGREDIENTS:
          return {
            ...state,
            ingredients: [...state.ingredients, ...action.payload]
          };
    default:
          return state;
   }
  }
