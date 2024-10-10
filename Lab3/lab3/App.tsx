import NewRecipeScreen from "./app/NewRecipeScreen/NewRecipeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./app/HomeScreen/HomeScreen";
import TabBarIcon from "./general-components/TabBarIcon/TabBarIcon";
import "./global.css"

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} route={route}/>,
                    tabBarShowLabel: false,
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="New Recipe" component={NewRecipeScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}