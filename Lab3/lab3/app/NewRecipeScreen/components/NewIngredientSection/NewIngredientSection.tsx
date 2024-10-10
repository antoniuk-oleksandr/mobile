import {Text, View} from "react-native";
import {FieldArrayWithId} from "react-hook-form";
import {Recipe} from "../../../../types/Recipe";
import IngredientList from "../IngredientList/IngredientList";
import {Ingredient} from "../../../../types/Ingredient";
import NewIngredientButton from "../NewIngredientButton/NewIngredientButton";
import {useState} from "react";
import NewIngredientModal from "../NewIngredientModal/NewIngredientModal";
import ErrorMessage from "../../../../general-components/ErrorMessage/ErrorMessage";
import Label from "../../../../general-components/Label/Label";

type NewIngredientSectionProps = {
    fields: FieldArrayWithId<Recipe, "ingredients">[],
    remove: (id: number) => void,
    append: (ingredient: Ingredient) => void,
    error: any,
}

const NewIngredientSection = (props: NewIngredientSectionProps) => {
    const {error, fields} = props;
    const [isOpen, setIsOpen] = useState(false);
    const message = fields.length === 0 && error?.message

    return (
        <View className={"mb-4"}>
            <Label text={'Ingredients'} error={message}/>
            <IngredientList {...props}/>
            <NewIngredientButton setIsOpen={setIsOpen} {...props}/>
            <ErrorMessage message={message}/>
            <NewIngredientModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                {...props}
            />
        </View>
    )
}

export default NewIngredientSection;