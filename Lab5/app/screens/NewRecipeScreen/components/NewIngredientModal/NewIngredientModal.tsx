import MyModal from "../../../../../general-components/MyModal/MyModal";
import {View} from "react-native";
import {Dispatch, MutableRefObject, SetStateAction, useEffect, useRef} from "react";
import NewIngredientModalHeader from "./components/NewIngredientModalHeader/NewIngredientModalHeader";
import NewIngredientModalBody from "./components/NewIngredientModalBody/NewIngredientModal";
import NewIngredientModalFooter from "./components/NewIngredientModalFooter/NewIngredientModalFooter";
import {Ingredient} from "../../../../../types/Ingredient";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {newIngredientSchema} from "../../helpers";
import {useNewRecipeFormState} from "../../../../../state-managment/use-new-recipe-form-state";

type NewIngredientModalProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    append: (ingredient: Ingredient) => void,
    isSubmitting: MutableRefObject<boolean>,
}

const NewIngredientModal = (props: NewIngredientModalProps) => {
    const {isSubmitting} = props;
    const {ingredientVal, setIngredientVal} =
        useNewRecipeFormState();
    const {control, handleSubmit, getValues, setValue} = useForm<Ingredient>({
        defaultValues: ingredientVal,
        resolver: zodResolver(newIngredientSchema)
    });

    useEffect(() => {
        return () => {
            if(isSubmitting.current) return;
            setIngredientVal(getValues());
        }
    }, []);

    return (
        <MyModal
            {...props}
            withInput
        >
            <View className={"w-full bg-white p-4 rounded-md"}>
                <NewIngredientModalHeader {...props}/>
                <NewIngredientModalBody control={control}/>
                <NewIngredientModalFooter
                    setValue={setValue}
                    handleSubmit={handleSubmit}
                    {...props}/>
            </View>
        </MyModal>
    )
}

export default NewIngredientModal;