import {useEffect, useState} from "react";
import {FullRecipe} from "../../../../types/FullRecipe";
import {InfiniteData} from "react-query";

export const useNewRecipe = (
    data: InfiniteData<{ data: FullRecipe[], nextPage: number | undefined }> | undefined,
    newRecipe: FullRecipe | null,
) => {
    const [recipes, setRecipes] = useState(() => data?.pages.flatMap((page) => page.data) ?? null);

    useEffect(() => {
        if (newRecipe && recipes && !recipes.some(recipe => recipe.recipe_id === newRecipe.recipe_id)) {
            setRecipes(prevRecipes => prevRecipes && [newRecipe, ...prevRecipes]);
        }
    }, [newRecipe]);

    return {recipes, setRecipes};
}