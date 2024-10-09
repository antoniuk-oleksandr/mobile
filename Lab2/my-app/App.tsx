import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import FirstScreen from "./app/FirstScreen";
import SecondScreen from "./app/SecondScreen";
import ThirdScreen from "./app/ThirdScreen";
import AppDrawer from "./general-components/AppDrawer/AppDrawer";
// import 'react-native-gesture-handler';
import './gesture-handler';
import AppTabs from "./general-components/AppTabs/AppTabs";


export default function App() {
    return (
        <>
            <NavigationContainer>
                <AppDrawer/>
                {/*<SafeAreaView style={{flex: 1}}>*/}
                {/*    <StatusBar/>*/}
                {/*    <AppTabs/>*/}
                {/*</SafeAreaView>*/}
            </NavigationContainer>
        </>
    )
        ;
}