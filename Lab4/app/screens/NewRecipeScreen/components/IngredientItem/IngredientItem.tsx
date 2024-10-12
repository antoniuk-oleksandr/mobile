import {Text, View} from "react-native";
import {Ingredient} from "../../../../../types/Ingredient";
import AntDesign from '@expo/vector-icons/AntDesign';

type IngredientProps = {
    ingredient: Ingredient,
    remove: (id: number) => void,
    id: number,
}

const IngredientItem = (props: IngredientProps) => {
    const {ingredient, remove, id} = props;
    const {name, amount} = ingredient;

    return (
        <View className={"px-3 py-2 rounded-md border border-neutral-300 mb-4 flex-row justify-between"}>
            <Text className={"text-base"}>{name}</Text>
            <View className={"flex-row"}>
                <Text className={"text-base mr-3"}>{amount}</Text>
                <AntDesign
                    onPress={() => remove(id)}
                    name="close"
                    size={24}
                    color="#ef4444"
                />
            </View>
        </View>
    )
}

export default IngredientItem;