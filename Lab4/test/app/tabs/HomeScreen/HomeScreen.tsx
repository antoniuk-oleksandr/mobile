import {ScrollView} from "react-native";
import NoRecipesMessage from "./components/NoRecipesMessage/NoRecipesMessage";
import RecipeList from "./components/RecipeList/RecipeList";
import LoadingScreen from "../../general-components/LoadingScreen/LoadingScreen";
import {useRecipes} from "./hooks/use-recipes";

const HomeScreen = () => {
    const {recipes} = useRecipes();

    if (!recipes) return <LoadingScreen/>;
    if (recipes.length === 0) return <NoRecipesMessage/>
    return (
        <ScrollView
            className="flex-1 p-4 bg-neutral-100"
        >
            <RecipeList recipes={recipes}/>
        </ScrollView>
    )
}

export default HomeScreen;
