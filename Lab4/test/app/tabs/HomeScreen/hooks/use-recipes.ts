import {useEffect} from "react";
import {useSQLiteContext} from "expo-sqlite";
import {getAllRecipes} from "../../../database/repository/recipe-repository";
import {useRecipesState} from "../../../state-managment/use-recipes-state";

export const useRecipes = () => {
    const {recipes, setRecipes} = useRecipesState();
    const db = useSQLiteContext();

    useEffect(() => {
        const getDataFromDB = async () => {
            const data = await getAllRecipes(db);
            if(!data) return;

            setRecipes(data);
        };

        getDataFromDB();
    }, [db]);

    return {recipes};
}