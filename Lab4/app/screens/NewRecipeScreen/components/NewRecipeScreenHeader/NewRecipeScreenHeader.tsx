import AppHeader from "../../../../../general-components/AppHeader/AppHeader";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useNavigation} from "@react-navigation/native";

const NewRecipeScreenHeader = () => {
    const navigation = useNavigation();

    return (
        <AppHeader
            text={"Create Recipe"}
            leftIcon={
                <FontAwesome
                    onPress={() => navigation.goBack()}
                    name="chevron-left" size={24} color="rgb(35, 35, 35)"
                />
            }
        />
    )
}

export default NewRecipeScreenHeader;