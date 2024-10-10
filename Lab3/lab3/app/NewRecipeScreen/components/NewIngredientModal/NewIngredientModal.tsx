import MyModal from "../../../../general-components/MyModal/MyModal";
import {View} from "react-native";
import {Dispatch, SetStateAction} from "react";
import NewIngredientModalHeader from "./components/NewIngredientModalHeader/NewIngredientModalHeader";
import NewIngredientModalBody from "./components/NewIngredientModalBody/NewIngredientModal";
import NewIngredientModalFooter from "./components/NewIngredientModalFooter/NewIngredientModalFooter";
import {Ingredient} from "../../../../types/Ingredient";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {newIngredientSchema} from "../../helpers";

const defaultValues = {
    name: '',
    amount: ''
} as Ingredient;

type NewIngredientModalProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    append: (ingredient: Ingredient) => void
}

const NewIngredientModal = (props: NewIngredientModalProps) => {
    const {control, handleSubmit, reset} = useForm<Ingredient>({
        defaultValues,
        resolver: zodResolver(newIngredientSchema)
    });

    return (
        <MyModal
            {...props}
            withInput
        >
            <View className={"w-full bg-white p-4 rounded-md"}>
                <NewIngredientModalHeader {...props}/>
                <NewIngredientModalBody control={control}/>
                <NewIngredientModalFooter
                    reset={reset}
                    handleSubmit={handleSubmit}
                    {...props}/>
            </View>
        </MyModal>
    )
}

export default NewIngredientModal;