import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenOne from '../../app/FirstScreen';
import SecondScreen from '../../app/SecondScreen';
import AppTabs from "../AppTabs/AppTabs";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Screen One">
            <Drawer.Screen name="Screen One" component={ScreenOne}/>
            <Drawer.Screen name="Screen Two" component={SecondScreen}/>
            <Drawer.Screen name="Screen Three" component={AppTabs}/>
        </Drawer.Navigator>
    );
}

export default AppDrawer;
