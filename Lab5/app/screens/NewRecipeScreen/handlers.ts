import {Recipe} from "../../../types/Recipe";
import {Ingredient} from "../../../types/Ingredient";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {SQLiteDatabase} from "expo-sqlite";
import {getLastInsertIdId, insertRecipeToDB} from "../../../database/repository/recipe-repository";
import {FullRecipe} from "../../../types/FullRecipe";
import {NewRecipeFormStore} from "../../../types/NewRecipeFormStore";
import {getEmptyIngredient, getEmptyRecipe} from "../../../utils/utils";
import {UseFormSetValue} from "react-hook-form";

export const handleNewRecipeFormSubmit = async (
    data: Recipe,
    navigation: any,
    db: SQLiteDatabase,
    setNewRecipe: (values: FullRecipe) => void,
    newRecipeFormState: NewRecipeFormStore,
    isSubmitting: MutableRefObject<boolean>
) => {
    isSubmitting.current = true;
    await insertRecipeToDB(db, data);
    const recipe_id = await getLastInsertIdId(db)
    newRecipeFormState.setRecipeVal({
        name: '',
        image: '',
        ingredients: [],
        instruction: '',
    });
    newRecipeFormState.setIngredientVal({
        name: '',
        amount: '',
    });
    setNewRecipe({...data, recipe_id} as unknown as FullRecipe);
    navigation.navigate('Home');
}

export const handleNewIngredientAppend = (
    data: Ingredient,
    append: (ingredient: Ingredient) => void,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    setIngredientVal: NewRecipeFormStore['setIngredientVal'],
    setValue: UseFormSetValue<Ingredient>,
) => {
    setValue('name', '');
    setValue('amount', '');
    append(data);
    setIngredientVal({
        name: '',
        amount: '',
    });
    setIsOpen(false);
}