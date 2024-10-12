import {Image, Text, View} from "react-native";
import {Recipe} from "../../../../types/Recipe";
import TagList from "../TagList/TagList";

type RecipeCardProps = {
    recipe: Recipe,
};

const RecipeCard = (props: RecipeCardProps) => {
    const {recipe} = props;
    const {name, tags} = recipe;

    return (
        <View
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
        </View>
    );
}

export default RecipeCard;
