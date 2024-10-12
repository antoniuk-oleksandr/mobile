import RecipeImage from "../RecipeImage/RecipeImage";
import RecipeName from "../RecipeName/RecipeName";
import {View} from "react-native";
import {FullRecipe} from "../../../../../types/FullRecipe";
import RecipeScreenHeader from "../RecipeScreenHeader/RecipeScreenHeader";

type RecipeTopBlockProps = FullRecipe;

const RecipeTopSection= (props: RecipeTopBlockProps) => {
    return (
        <View className="relative">
            <RecipeImage {...props}/>
            <RecipeName {...props}/>
        </View>
    )
}

export default RecipeTopSection;