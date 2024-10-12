import { Text, View } from "react-native";

const NoRecipesMessage = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-2xl font-medium text-neutral-800">No recipes found.</Text>
        </View>
    );
}

export default NoRecipesMessage;
