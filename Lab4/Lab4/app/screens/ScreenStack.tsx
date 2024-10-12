import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RecipeScreen from "./RecipeScreen/RecipeScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import NewRecipeScreen from "./NewRecipeScreen/NewRecipeScreen";
import HomeScreenHeader from "./HomeScreen/components/HomeScreenHeader/HomeScreenHeader";
import NewRecipeScreenHeader from "./NewRecipeScreen/components/NewRecipeScreenHeader/NewRecipeScreenHeader";
import RecipeScreenHeader from "./RecipeScreen/components/RecipeScreenHeader/RecipeScreenHeader";

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: true}} initialRouteName="Home">
            <Stack.Screen
                options={{header: () => <HomeScreenHeader/>}}
                name="Home" component={HomeScreen}
            />
            <Stack.Screen
                options={{header: () => <NewRecipeScreenHeader/>}}
                name="NewRecipe" component={NewRecipeScreen}
            />
            <Stack.Screen
                options={{header: () => <RecipeScreenHeader/>}}
                 name="Recipe" component={RecipeScreen}
            />
        </Stack.Navigator>
    )
}

export default ScreenStack;