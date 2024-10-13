import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useNavigation} from "@react-navigation/native";
import AppHeader from "../../../../../general-components/AppHeader/AppHeader";

const RecipeScreenHeader = () => {
    const navigation = useNavigation();

    return (
        <AppHeader
            extraStyles={"!absolute !bg-transparent"}
            leftIcon={
                <FontAwesome
                    onPress={() => navigation.goBack()}
                    name="chevron-left" size={24} color="white"/>
            }
            rightIcon={
                <FontAwesome name="share-alt" size={24} color="white"/>
            }
        />
    )
}

export default RecipeScreenHeader;