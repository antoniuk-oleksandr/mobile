import {Recipe} from "../types/Recipe";
import {Ingredient} from "../types/Ingredient";

export const getEmptyRecipe = (): Recipe => ({
    name: '',
    image: '',
    ingredients: [],
    instruction: '',
})

export const getEmptyIngredient = (): Ingredient => ({
    name: '',
    amount: '',
})