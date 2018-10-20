import * as Action from './shopping-list.action';
import { Ingredient } from '../../shared/ingredient.model';



export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apple', 500),
    new Ingredient('Banana', 100),
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: Action.ShoppingListAction): State {

  switch (action.type) {

    case Action.ADD_INGREDIENT:
          return {
            ...state,
            ingredients: [...state.ingredients, action.payload]
          };
    case Action.ADD_MULTI_INGREDIENTS:
          const oldIngredients = [...state.ingredients];
          const addedIngredients = [...action.payload];
          oldIngredients.forEach((entry) => {
            for (let i = 0; i < addedIngredients.length; i++) {
              if ( entry.name === addedIngredients[i].name) {
                entry.amount += addedIngredients[i].amount;
                addedIngredients.splice(i , 1);
              }
            }
            // addedIngredients.map((data, index) => {
            //   if ( entry.name === data.name) {
            //         entry.amount += data.amount;
            //         addedIngredients.splice(index , 1);
            //       }
            // })
          });
          return {
            ...state,
            ingredients: [...state.ingredients, ...addedIngredients]
          };
    case Action.UPDATE_INGREDIENT:
          const ingredient = state.ingredients[state.editedIngredientIndex];
          const updateIngredient = {
            ...ingredient,
            ...action.payload.ingredent,
          };
          const ingredients = [...state.ingredients];
          ingredients[state.editedIngredientIndex] = updateIngredient;
                return {
                  ...state,
                  ingredients: ingredients,
                  editedIngredient: null,
                  editedIngredientIndex: -1
                };
    case Action.DELETE_INGREDIENT:
          const newIngredient = [...state.ingredients];
          newIngredient.splice(state.editedIngredientIndex, 1);
                return {
                  ...state,
                  ingredients: newIngredient,
                  editedIngredient: null,
                  editedIngredientIndex: -1
                };
    case Action.START_EDIT:
          const editIngredient = {...state.ingredients[action.payload]};
          return {
            ...state,
            editedIngredient: editIngredient,
            editedIngredientIndex : action.payload
          };
    case Action.STOP_EDIT:
          return {
            ...state,
            editedIngredient: null,
            editedIngredientIndex: -1
          };
    default:
          return state;
   }
  }
