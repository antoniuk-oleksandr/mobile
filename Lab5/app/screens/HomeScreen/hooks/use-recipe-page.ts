import {SQLiteDatabase} from "expo-sqlite";
import {getRecipesRemaining, getSomeRecipes} from "../../../../database/repository/recipe-repository";
import {useInfiniteQuery} from "react-query";

export const useRecipePage = (db: SQLiteDatabase, additionalOffset: number,) => {
    const getRecipes = async ({pageParam = 1}) => {
        const data = await getSomeRecipes(db, pageParam, additionalOffset);
        const remaining = await getRecipesRemaining(db, pageParam + 1, additionalOffset);

        return {
            data,
            nextPage: !remaining || remaining < 0 ? undefined : pageParam + 1,
        }
    }

    return useInfiniteQuery(
        "recipes",
        getRecipes,
        {getNextPageParam: (lastPage) => lastPage.nextPage}
    );
}