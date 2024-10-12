import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../../../../types/RootStackParamList";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import AppHeader from "../../../../../general-components/AppHeader/AppHeader";

const HomeScreenHeader = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <AppHeader
            text={"Your Recipes"}
            rightIcon={
                <FontAwesome
                    onPress={() => navigation.navigate("NewRecipe")}
                    name="plus-circle" size={28} color="rgb(38, 38, 38)"
                />
            }
        />
    )
}

export default HomeScreenHeader;