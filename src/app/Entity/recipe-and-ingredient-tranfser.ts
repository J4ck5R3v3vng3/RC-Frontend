import { Recipe } from './Recipe'

export class RecipeAndIngredientTranfser {

  recipe: Recipe;
  ingredientTransferList;

  constructor(recipe: Recipe, ingredientTransferList) {
    this.recipe = recipe;
    this.ingredientTransferList = ingredientTransferList;
  }

}
