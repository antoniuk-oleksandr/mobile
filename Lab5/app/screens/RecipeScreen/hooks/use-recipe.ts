import {useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {useSQLiteContext} from "expo-sqlite";
import {getRecipeById} from "../../../../database/repository/recipe-repository";
import {FullRecipe} from "../../../../types/FullRecipe";

export const useRecipe = () => {
    const route = useRoute();
    const [recipe, setRecipe] = useState<FullRecipe | null>(null);
    const {id} = route.params as { id: number };
    const db = useSQLiteContext();

    useEffect(() => {
        const getData = async () => {
            const recipe = await getRecipeById(db, id);
            recipe && setRecipe(recipe);
        }

        getData();
    }, []);

    return {recipe};
}