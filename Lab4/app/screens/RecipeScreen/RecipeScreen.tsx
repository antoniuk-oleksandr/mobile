import {View, ScrollView} from "react-native";
import {useRecipe} from "./hooks/use-recipe";
import LoadingScreen from "../../../general-components/LoadingScreen/LoadingScreen";
import RecipeName from "./components/RecipeName/RecipeName";
import RecipeImage from "./components/RecipeImage/RecipeImage";
import RecipeInstruction from "./components/RecipeInstruction/RecipeInstruction";
import RecipeIngredients from "./components/RecipeIngredients/RecipeIngredients";
import RecipeTopSection from "./components/RecipeTopSection/RecipeTopSection";
import RecipeBottomSection from "./components/RecipeBottomSection/RecipeBottomSection";

const RecipeScreen = () => {
    const {recipe} = useRecipe();

    if (!recipe) return <LoadingScreen/>;
    return (
        <ScrollView className="flex-1 bg-gray-50">
            <RecipeTopSection {...recipe}/>
            <RecipeBottomSection {...recipe}/>
        </ScrollView>
    );
};

export default RecipeScreen;
