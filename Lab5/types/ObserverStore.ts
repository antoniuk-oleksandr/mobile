import {FullRecipe} from "./FullRecipe";

export type ObserverStore = {
    newRecipe: FullRecipe | null,
    additionalOffset: number,
    setNewRecipe: (value: FullRecipe) => void,
}