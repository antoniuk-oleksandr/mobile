import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import {RootStackParamList} from "../../../types/RootStackParamList";
import {SQLiteDatabase} from "expo-sqlite";
import {getRandomRecipeRequest} from "../../../api/get-random-recipe-request";
import {ObserverStore} from "../../../types/ObserverStore";
import {mapRandomRecipeResponseToRecipe} from "./helpers";
import {getLastInsertIdId, insertRecipeToDB} from "../../../database/repository/recipe-repository";
import {Dispatch, SetStateAction} from "react";
import {FullRecipe} from "../../../types/FullRecipe";

export const handleImportRecipeButtonClick = async (
    db: SQLiteDatabase,
    setNewRecipe: ObserverStore["setNewRecipe"],
    setLoading: Dispatch<SetStateAction<boolean>>,
) => {
    setLoading(true);
    const response = await getRandomRecipeRequest();
    const recipe = mapRandomRecipeResponseToRecipe(response['meals'][0]);
    await insertRecipeToDB(db, recipe);
    const recipe_id = await getLastInsertIdId(db);
    setNewRecipe({...recipe, recipe_id} as any as FullRecipe);
    setLoading(false);
}

export const createNewRecipeButtonClick = (
    navigation: NativeStackNavigationProp<RootStackParamList>,
) => {
    navigation.navigate("NewRecipe");
}