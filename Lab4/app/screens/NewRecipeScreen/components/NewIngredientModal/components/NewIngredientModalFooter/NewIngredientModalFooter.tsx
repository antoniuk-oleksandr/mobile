import Button from "../../../../../../../general-components/Button/Button";
import {View} from "react-native";
import {Dispatch, SetStateAction} from "react";
import {Ingredient} from "../../../../../../../types/Ingredient";
import {handleNewIngredientAppend} from "../../../../handlers";

type NewIngredientModalFooterProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    append: (ingredient: Ingredient) => void,
    handleSubmit: (callback: (data: Ingredient) => void) => () => void,
    reset: () => void,
}

const NewIngredientModalFooter = (props: NewIngredientModalFooterProps) => {
    const {setIsOpen, append, handleSubmit, reset} = props;

    return (
        <View className={"flex-row justify-end"}>
            <Button
                extraButtonStyles={"mr-2 !bg-gray-500"}
                onPress={() => setIsOpen(false)} title={'Cancel'}/>
            <Button
                onPress={handleSubmit((data) =>
                    handleNewIngredientAppend(data, append, setIsOpen, reset))}
                title={'OK'}
            />
        </View>
    )
}

export default NewIngredientModalFooter;