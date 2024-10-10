import {ScrollView} from "react-native";
import {useRecipes} from "../../state-managment/use-recipes";
import NoRecipesMessage from "./components/NoRecipesMessage/NoRecipesMessage";
import RecipeList from "./components/RecipeList/RecipeList";

const HomeScreen = () => {
    const {recipes} = useRecipes();

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
