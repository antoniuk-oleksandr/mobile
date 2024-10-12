import {Text, View} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import {Dispatch, SetStateAction} from "react";

type NewIngredientModalHeaderProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

const NewIngredientModalHeader = (props: NewIngredientModalHeaderProps) => {
    const {setIsOpen} = props;

    return (
        <View className={"mb-4 flex-row justify-between"}>
            <Text className={"text-base text-neutral-800 font-semibold"}>New Ingredient</Text>
            <AntDesign
                onPress={() => setIsOpen(false)}
                name="close"
                size={24}
                color="#252525"
            />
        </View>
    )
}

export default NewIngredientModalHeader;