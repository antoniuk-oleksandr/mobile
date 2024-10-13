import { useNavigation } from "@react-navigation/native";
import Button from "../../../../../general-components/Button/Button";
import {View} from "react-native";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import {RootStackParamList} from "../../../../../types/RootStackParamList";
import {useSQLiteContext} from "expo-sqlite";
import {createNewRecipeButtonClick, handleImportRecipeButtonClick} from "../../handlers";
import {useObserver} from "../../../../../state-managment/use-observer";
import {useState} from "react";

const HomeScreenBottomBar = () => {
    const db = useSQLiteContext();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const {setNewRecipe} = useObserver();
    const [loading, setLoading] = useState(false);

    return (
        <View className="absolute px-4 flex-row gap-x-2 bottom-0 left-0 right-0 bg-white py-4 w-full shadow">
            <Button
                loading={loading}
                extraButtonStyles={"flex-1"}
                title={"Import Recipe"}
                onPress={() => handleImportRecipeButtonClick(db, setNewRecipe, setLoading)}
            />
            <Button
                extraButtonStyles={"flex-1"}
                title={"Create New Recipe"}
                onPress={() => createNewRecipeButtonClick(navigation)}
            />
        </View>
    )
}

export default HomeScreenBottomBar;
