import {Suspense} from "react";
import LoadingScreen from "../../general-components/LoadingScreen/LoadingScreen";
import {SQLiteProvider} from "expo-sqlite";
import TabBarIcon from "../../general-components/TabBarIcon/TabBarIcon";
import HomeScreen from "./HomeScreen/HomeScreen";
import NewRecipeScreen from "./NewRecipeScreen/NewRecipeScreen";
import {NavigationContainer} from "@react-navigation/native";

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Suspense fallback={<LoadingScreen/>}>
    <SQLiteProvider databaseName={'sqlite.db'} useSuspense>
    <Tab.Navigator
        screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => <TabBarIcon focused={focused} route={route}/>,
    tabBarShowLabel: false,
})}
>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="New Recipe" component={NewRecipeScreen}/>
    </Tab.Navigator>
    </SQLiteProvider>
    </Suspense>
    </NavigationContainer>
    )
}

export default TabNavigator;