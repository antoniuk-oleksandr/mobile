import {View} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

type TabBarIconProps = {
    route: { name: string },
    focused: boolean,
}

const TabBarIcon = (props: TabBarIconProps) => {
    const {route, focused} = props;

    const color = !focused ? "#262626" : "rgb(22 163 74)";

    return (
        <View>
            {route.name === 'Home' && <Entypo color={color} name="home" size={24}/>}
            {route.name === 'New Recipe' && <AntDesign color={color} name="pluscircle" size={24}/>}
        </View>
    )
}

export default TabBarIcon;