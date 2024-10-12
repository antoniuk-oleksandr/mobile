import RecipeCard from "../RecipeCard/RecipeCard";
import {Recipe} from "../../../../../types/Recipe";
import {FlatList, View} from "react-native";
import {FullRecipe} from "../../../../../types/FullRecipe";

type  RecipeListProps = {
    recipes: FullRecipe[];
}

const RecipeList = (props: RecipeListProps) => {
    const {recipes} = props;

    const renderItem = ({item}: { item: FullRecipe }) => (
        <RecipeCard recipe={item}/>
    );

    return (
        <FlatList
            keyExtractor={(item) => item.recipe_id.toString()}
            contentContainerStyle={{paddingVertical: 16}}
            data={recipes} renderItem={renderItem}
            ItemSeparatorComponent={() => <View className={"h-4"}/>}
            onEndReachedThreshold={0.5}
            onEndReached={() => console.log("reached")}
        />
    )
}

export default RecipeList;