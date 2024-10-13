import RecipeImage from "../RecipeImage/RecipeImage";
import RecipeName from "../RecipeName/RecipeName";
import {View} from "react-native";
import {FullRecipe} from "../../../../../types/FullRecipe";
import RecipeScreenHeader from "../RecipeScreenHeader/RecipeScreenHeader";
import {LinearGradient} from "expo-linear-gradient";
import RecipeGradient from "../RecipeGradient/RecipeGradient";

type RecipeTopBlockProps = FullRecipe;

const RecipeTopSection= (props: RecipeTopBlockProps) => {
    return (
        <View className="relative">
            <RecipeImage {...props}/>
            <RecipeGradient/>
            <RecipeName {...props}/>
        </View>
    )
}

export default RecipeTopSection;