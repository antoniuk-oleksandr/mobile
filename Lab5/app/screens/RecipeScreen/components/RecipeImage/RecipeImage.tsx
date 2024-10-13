import {Image} from "react-native";

type RecipeImagesProps = {
    image: string,
}

const RecipeImage= (props: RecipeImagesProps) => {
    const {image} = props;

    return (
        <Image
            className="w-full aspect-square"
            source={{uri: image}}
        />
    )
}

export default RecipeImage;