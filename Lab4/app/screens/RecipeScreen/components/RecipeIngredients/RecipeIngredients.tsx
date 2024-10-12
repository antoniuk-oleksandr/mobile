import {Ingredient} from "../../../../../types/Ingredient";
import {View} from "react-native";
import RecipeIngredientList from "../RecipeIngredientList/RecipeIngredientList";
import RecipeLabel from "../RecipeLabel/RecipeLabel";

type RecipeIngredientsProps = {
    ingredients: Ingredient[]
}

const RecipeIngredients = (props: RecipeIngredientsProps) => {
    return (
        <View>
            <RecipeLabel text={'Ingredients'}/>
            <RecipeIngredientList {...props}/>
        </View>
    )
}

export default RecipeIngredients;