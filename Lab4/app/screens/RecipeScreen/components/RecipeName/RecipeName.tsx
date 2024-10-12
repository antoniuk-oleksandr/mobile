import {Text, View} from "react-native";

type RecipeNameProps = {
    name: string,
}

const RecipeName = (props: RecipeNameProps) => {
    const {name} = props;

    return (
        <View className="absolute left-4 bottom-4">
            <Text className="text-4xl text-white font-bold">{name}</Text>
        </View>
    )
}

export default RecipeName;