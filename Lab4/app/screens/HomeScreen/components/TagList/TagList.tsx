import {View} from "react-native";
import Badge from "../../../../../general-components/Badge/Badge";

type TagListProps = {
    tags: string,
}

const TagList = (props: TagListProps) => {
    const {tags} = props;

    return (
        <View className={"flex-row gap-x-2"}>
            {tags.split(', ').map((tag, index) => (
                <Badge key={index} text={tag}/>
            ))}
        </View>
    )
}

export default TagList;