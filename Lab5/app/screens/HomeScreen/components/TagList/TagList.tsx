import {View} from "react-native";
import Badge from "../../../../../general-components/Badge/Badge";
import {FullRecipe} from "../../../../../types/FullRecipe";

type TagListProps = FullRecipe;

const TagList = (props: TagListProps) => {
    const {tags} = props;

    if(!tags || tags === 'null') return null;
    return (
        <View className={"flex-row flex-wrap h-8 gap-y-2 gap-x-2 overflow-hidden"}>
            {tags.split(',').map((tag, index) => (
                <Badge key={index} text={tag}/>
            ))}
        </View>
    )
}

export default TagList;