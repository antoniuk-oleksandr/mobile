import {View} from "react-native";
import {FieldArrayWithId} from "react-hook-form";
import {Recipe} from "../../../../../types/Recipe";
import IngredientItem from "../IngredientItem/IngredientItem";

type IngredientListProps = {
    fields: FieldArrayWithId<Recipe, "ingredients">[],
    remove: (id: number) => void
}

const IngredientList = (props: IngredientListProps) => {
    const {fields, remove} = props;

    return (
        <View>
            {fields.map((field, index) => (
                <IngredientItem
                    key={field.id}
                    ingredient={field}
                    remove={remove}
                    id={index}
                />
            ))}
        </View>
    )
}

export default IngredientList;