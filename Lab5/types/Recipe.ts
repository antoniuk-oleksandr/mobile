import {Ingredient} from "./Ingredient";

export type Recipe = {
    name: string,
    instruction: string,
    ingredients: Ingredient[],
    image: string,
    tags?: string
}