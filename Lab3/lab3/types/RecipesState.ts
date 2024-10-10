import {Recipe} from "./Recipe";

export type RecipesState = {
    recipes: Recipe[],
    setRecipes: (recipes: Recipe[]) => void,
    addRecipe: (recipe: Recipe) => void,
}