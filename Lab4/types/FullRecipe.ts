import { IngredientModel } from "../database/models/IngredientModel";
import {RecipeModel} from "../database/models/RecipeModel";

export type FullRecipe = RecipeModel & {
    ingredients: IngredientModel[]
}