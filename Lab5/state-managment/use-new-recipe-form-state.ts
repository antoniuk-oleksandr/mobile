import {create} from "zustand/react";
import {NewRecipeFormStore} from "../types/NewRecipeFormStore";

export const useNewRecipeFormState = create<NewRecipeFormStore>((setState) => ({
    recipeVal: {
        name: '',
        image: '',
        instruction: '',
        ingredients: [],
    },
    ingredientVal: {
        name: '',
        amount: '',
    },
    setIngredientVal: (value) =>
        setState({ingredientVal: value}),
    setRecipeVal: (value) =>
        setState({recipeVal: value}),
}));