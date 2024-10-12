import RecipeImage from "../RecipeImage/RecipeImage";
import RecipeName from "../RecipeName/RecipeName";
import {View} from "react-native";
import {Recipe} from "../../../../../types/Recipe";

type RecipeTopBlockProps = Recipe

const RecipeTopBlock= () => {
    return (
        <View className="relative">
            <RecipeImage image={image}/>
            <RecipeName name={name}/>
        </View>
    )
}