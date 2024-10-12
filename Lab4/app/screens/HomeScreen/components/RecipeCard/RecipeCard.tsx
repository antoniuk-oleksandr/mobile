import {Image, Text, TouchableOpacity, View} from "react-native";
import {Recipe} from "../../../../../types/Recipe";
import TagList from "../TagList/TagList";
import {FullRecipe} from "../../../../../types/FullRecipe";
import {Link, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import {RootStackParamList} from "../../../../../types/RootStackParamList";

type RecipeCardProps = {
    recipe: FullRecipe,
};

const RecipeCard = (props: RecipeCardProps) => {
    const {recipe} = props;
    const {name, tags, recipe_id} = recipe;
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View className={"px-4"}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Recipe", {id: recipe_id})}
                className="rounded-md p-4 flex-row w-full gap-x-4 border border-neutral-300"
            >
                <Image
                    className="w-24 h-24 rounded-md"
                    source={{uri: recipe.image}}
                />
                <View className="gap-y-2 justify-center">
                    <Text className="text-neutral-800 text-lg font-medium">{name}</Text>
                    {tags && <TagList tags={tags}/>}
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default RecipeCard;
