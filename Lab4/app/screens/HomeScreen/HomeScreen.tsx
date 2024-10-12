import {View} from "react-native";
import NoRecipesMessage from "./components/NoRecipesMessage/NoRecipesMessage";
import RecipeList from "./components/RecipeList/RecipeList";
import LoadingScreen from "../../../general-components/LoadingScreen/LoadingScreen";
import {useRecipes} from "./hooks/use-recipes";

const HomeScreen = () => {
    const {recipes} = useRecipes();

    if (!recipes) return <LoadingScreen/>;
    if (recipes.length === 0) return <NoRecipesMessage/>
    return (
        <View>
            <RecipeList recipes={recipes}/>
        </View>
    )
}

export default HomeScreen;
