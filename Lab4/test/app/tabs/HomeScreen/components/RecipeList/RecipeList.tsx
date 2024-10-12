import RecipeCard from "../RecipeCard/RecipeCard";
import {Recipe} from "../../../../types/Recipe";
import {View} from "react-native";

type  RecipeListProps = {
    recipes: Recipe[];
}

const RecipeList = (props: RecipeListProps) => {
    const {recipes} = props;

    return (
        <View className={"gap-y-4 bg-white"}>
            {recipes.map((recipe, index) => (
                <RecipeCard recipe={recipe} key={index}/>
            ))}
        </View>
    )
}

export default RecipeList;