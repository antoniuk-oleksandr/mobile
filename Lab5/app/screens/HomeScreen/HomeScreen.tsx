import {View} from "react-native";
import RecipeList from "./components/RecipeList/RecipeList";
import HomeScreenBottomBar from "./components/HomeScreenBottomBar/HomeScreenBottomBar";

const HomeScreen = () => {
    return (
        <View className={"flex-1"}>
            <RecipeList/>
            <HomeScreenBottomBar/>
        </View>
    )
}

export default HomeScreen;
