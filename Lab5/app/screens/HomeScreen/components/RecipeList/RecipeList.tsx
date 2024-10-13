import RecipeCard from "../RecipeCard/RecipeCard";
import {View} from "react-native";
import {FullRecipe} from "../../../../../types/FullRecipe";
import {useCallback, useEffect, useMemo, useState} from "react";
import {useRecipePage} from "../../hooks/use-recipe-page";
import {useSQLiteContext} from "expo-sqlite";
import {FlashList} from "@shopify/flash-list";
import {useObserver} from "../../../../../state-managment/use-observer";
import NoRecipesMessage from "../NoRecipesMessage/NoRecipesMessage";
import {loadMore} from "./helpers";
import {useNewRecipe} from "../../hooks/use-new-recipe";
import {useRecipesQueryData} from "../../hooks/use-recipes-query-data";

const RecipeList = () => {
    const db = useSQLiteContext();
    const {newRecipe, additionalOffset} = useObserver();
    const {data, fetchNextPage, hasNextPage, isFetchingNextPage} = useRecipePage(db, additionalOffset);
    const {recipes, setRecipes} = useNewRecipe(data, newRecipe);
    useRecipesQueryData(data, setRecipes);

    const renderItem = useCallback(({item}: { item: FullRecipe }) => (
        <RecipeCard recipe={item}/>
    ), []);

    const separator = useMemo(() => <View className="h-4"/>, []);

    if (recipes === null) return null;
    if (recipes.length === 0) return <NoRecipesMessage/>;
    return (
        <View className={"flex-1"}>
            <FlashList
                estimatedItemSize={100}
                contentContainerClassName={"pt-4 pb-[80px]"}
                keyExtractor={(item) => item.recipe_id.toString()}
                data={recipes}
                renderItem={renderItem}
                ItemSeparatorComponent={() => separator}
                onEndReachedThreshold={0.5}
                onEndReached={() =>
                    loadMore(hasNextPage, isFetchingNextPage, fetchNextPage)}
                removeClippedSubviews={true}
            />
        </View>
    );
};

export default RecipeList;
