import {Recipe} from "./Recipe";
import {Ingredient} from "./Ingredient";

export type NewRecipeFormStore = {
    recipeVal: Recipe,
    ingredientVal: Ingredient,
    setRecipeVal: (value: Recipe) => void,
    setIngredientVal: (value: Ingredient) => void,
}