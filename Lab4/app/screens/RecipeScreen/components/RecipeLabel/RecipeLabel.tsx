import {Text} from "react-native";

type RecipeLabelProps = {
    text: string,
}

const RecipeLabel = (props: RecipeLabelProps) => {
    const {text} = props;

    return (
        <Text className="text-lg text-neutral-800 font-semibold mb-1">{text}</Text>
    )
}

export default RecipeLabel;