import {FullRecipe} from "../../../../../types/FullRecipe";
import RecipeInstruction from "../RecipeInstruction/RecipeInstruction";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import {View} from "react-native";

type RecipeBottomSectionProps = FullRecipe;

const RecipeBottomSection = (props: RecipeBottomSectionProps) => {
    return (
        <View className="p-4">
            <RecipeInstruction {...props}/>
            <RecipeIngredients {...props}/>
        </View>
    )
}

export default RecipeBottomSection;