import {Ingredient} from "../../../../../types/Ingredient";
import {Text} from "react-native";

type RecipeIngredientProps = Ingredient;

const RecipeIngredient= (props: RecipeIngredientProps) => {
    const {name, amount} = props;

    return (
        <Text className="text-gray-700 text-base">
            - {name} ({amount})
        </Text>
    )
}

export default RecipeIngredient;