import {Text, View} from "react-native";
import {FullRecipe} from "../../../../../types/FullRecipe";

type RecipeNameProps = FullRecipe;

const RecipeName = (props: RecipeNameProps) => {
    const {name} = props;

    return (
        <View style={{maxWidth: "90%", paddingRight: 16}}>
            <Text
                className="text-neutral-800 text-lg font-medium"
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                {name}
            </Text>
        </View>
    )
}

export default RecipeName;