import NewRecipeScreen from "./app/NewRecipeScreen/NewRecipeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./app/HomeScreen/HomeScreen";
import TabBarIcon from "./general-components/TabBarIcon/TabBarIcon";
import "./global.css"
import {SQLiteProvider} from "expo-sqlite";
import {Suspense} from "react";
import LoadingScreen from "./general-components/LoadingScreen/LoadingScreen";
import {useDatabase} from "./app/HomeScreen/hooks/use-database";

const Tab = createBottomTabNavigator();

export default function App() {
    const {loaded} = useDatabase();

    if (!loaded) return <LoadingScreen/>
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
    );
}