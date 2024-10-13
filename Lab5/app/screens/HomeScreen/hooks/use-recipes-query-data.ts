import {Dispatch, SetStateAction, useEffect} from "react";
import {InfiniteData} from "react-query";
import {FullRecipe} from "../../../../types/FullRecipe";

export const useRecipesQueryData = (
    data: InfiniteData<{ data: FullRecipe[], nextPage: number | undefined }> | undefined,
    setRecipes: Dispatch<SetStateAction<FullRecipe[] | null>>
) => {
    useEffect(() => {
        if (data) {
            const newRecipes = data.pages.flatMap((page) => page.data) ?? null;
            setRecipes(newRecipes);
        }
    }, [data]);
}