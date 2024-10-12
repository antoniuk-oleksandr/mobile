import {Recipe} from "../../types/Recipe";
import {Ingredient} from "../../types/Ingredient";
import {Dispatch, SetStateAction} from "react";
import {RecipesState} from "../../types/RecipesState";

export const handleNewRecipeFormSubmit = (
    data: Recipe,
    addRecipe: RecipesState['addRecipe'],
    reset: () => void,
    navigation: any,
) => {
    addRecipe(data);
    reset();
    navigation.navigate('Home');
}

export const handleNewIngredientAppend = (
    data: Ingredient,
    append: (ingredient: Ingredient) => void,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    reset: () => void,
) => {
    append(data);
    reset();
    setIsOpen(false);
}