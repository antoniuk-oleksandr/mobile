import {Recipe} from "../../types/Recipe";
import {Ingredient} from "../../types/Ingredient";
import {Dispatch, SetStateAction} from "react";
import {SQLiteDatabase} from "expo-sqlite";
import {insertRecipeToDB} from "../../database/repository/recipe-repository";
import {RecipesState} from "../../types/RecipesState";

export const handleNewRecipeFormSubmit = async (
    data: Recipe,
    reset: () => void,
    navigation: any,
    db: SQLiteDatabase,
    addRecipe: RecipesState["addRecipe"],
) => {
    const id = await insertRecipeToDB(db, data);
    if(!id) return;

    reset();
    addRecipe({...data, recipe_id: id});
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