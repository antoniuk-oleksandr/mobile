import Button from "../../../../../../../general-components/Button/Button";
import {View} from "react-native";
import {Dispatch, MutableRefObject, SetStateAction, useRef} from "react";
import {Ingredient} from "../../../../../../../types/Ingredient";
import {handleNewIngredientAppend} from "../../../../handlers";
import {useNewRecipeFormState} from "../../../../../../../state-managment/use-new-recipe-form-state";
import {UseFormSetValue} from "react-hook-form";

type NewIngredientModalFooterProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    append: (ingredient: Ingredient) => void,
    handleSubmit: (callback: (data: Ingredient) => void) => () => void,
    setValue: UseFormSetValue<Ingredient>,
}

const NewIngredientModalFooter = (props: NewIngredientModalFooterProps) => {
    const {setIsOpen, append, handleSubmit, setValue} = props;
    const {setIngredientVal} = useNewRecipeFormState();

    return (
        <View className={"flex-row justify-end"}>
            <Button
                extraButtonStyles={"mr-2 !bg-gray-500"}
                onPress={() => setIsOpen(false)} title={'Cancel'}/>
            <Button
                onPress={handleSubmit((data) =>
                    handleNewIngredientAppend(data, append, setIsOpen, setIngredientVal, setValue))}
                title={'OK'}
            />
        </View>
    )
}

export default NewIngredientModalFooter;