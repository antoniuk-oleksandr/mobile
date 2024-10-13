import Button from "../../../../../general-components/Button/Button";
import {View} from "react-native";
import {Dispatch, SetStateAction} from "react";

type NewIngredientButtonProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

const NewIngredientButton = (props: NewIngredientButtonProps) => {
    const {setIsOpen} = props;

    return (
        <View className={"items-end"}>
            <Button
                extraButtonStyles={"!bg-gray-500 !w-40"}
                onPress={() => setIsOpen(true)}
                title={"Add Ingredient"}
            />
        </View>
    )
}

export default NewIngredientButton;