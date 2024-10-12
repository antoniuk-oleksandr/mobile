import {useEffect, useState} from "react";
import {useSQLiteContext} from "expo-sqlite";
import {getAllRecipes} from "../../../../database/repository/recipe-repository";
import {useObserver} from "../../../../state-managment/use-observer";
import {FullRecipe} from "../../../../types/FullRecipe";

export const useRecipes = () => {
    const [recipes, setRecipes] = useState<FullRecipe[] | null>(null);
    const {value} = useObserver();
    const db = useSQLiteContext();

    useEffect(() => {
        const getDataFromDB = async () => {
            const data = await getAllRecipes(db);
            if (!data) return;

            setRecipes(data);
        };

        getDataFromDB();
    }, [value]);

    return {recipes};
}