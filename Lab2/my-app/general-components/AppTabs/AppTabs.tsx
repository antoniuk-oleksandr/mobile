import FirstScreen from "../../app/FirstScreen";
import SecondScreen from "../../app/SecondScreen";
import ThirdScreen from "../../app/ThirdScreen";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();


const AppTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            swipeEnabled: true,
        }}>
            <Tab.Screen name={'Screen One'} component={FirstScreen}/>
            <Tab.Screen name={'Screen Two'} component={SecondScreen}/>
            <Tab.Screen name={'Screen Three'} component={ThirdScreen}/>
        </Tab.Navigator>
    )
}

export default AppTabs;