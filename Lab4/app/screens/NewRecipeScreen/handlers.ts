import {Recipe} from "../../../types/Recipe";
import {Ingredient} from "../../../types/Ingredient";
import {Dispatch, SetStateAction} from "react";
import {SQLiteDatabase} from "expo-sqlite";
import {insertRecipeToDB} from "../../../database/repository/recipe-repository";

export const handleNewRecipeFormSubmit = async (
    data: Recipe,
    reset: () => void,
    navigation: any,
    db: SQLiteDatabase,
    notify: () => void,
) => {
    await insertRecipeToDB(db, data);
    reset();
    notify();
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