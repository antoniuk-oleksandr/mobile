import {Ingredient} from "../../../../../types/Ingredient";
import {View} from "react-native";
import RecipeIngredient from "../RecipeIngredient/RecipeIngredient";

type RecipeIngredientListProps = {
    ingredients: Ingredient[]
}

const RecipeIngredientList = (props: RecipeIngredientListProps) => {
    const {ingredients} = props;

    return (
        <View>
            {ingredients.map((ingredient, index) => (
                <RecipeIngredient
                    {...ingredient}
                    key={index}
                />
            ))}
        </View>
    )
}

export default RecipeIngredientList;