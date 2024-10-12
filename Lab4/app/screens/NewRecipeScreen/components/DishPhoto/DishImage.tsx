import {Image, View} from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';

type DishPictureProps = {
    image: string
}

const DishImage = (props: DishPictureProps) => {
    const {image} = props;

    return (
        <View
            className={"w-full bg-white rounded-md justify-center items-center border border-neutral-300 aspect-square mb-4"}>
            {image.length > 0 ?
                <Image
                    className={"w-full aspect-square rounded-md"}
                    source={{uri: image}}
                />
                :
                <Fontisto name="picture" size={48} color="rgb(212, 212, 212)"/>
            }
        </View>
    )
}

export default DishImage;