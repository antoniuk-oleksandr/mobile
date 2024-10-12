import {Text, TouchableOpacity,} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type CameraModalBodyComponentProps = {
    iconName: keyof typeof FontAwesome.glyphMap,
    text: string,
    onPress: () => void
}

const CameraModalBodyComponent = (props: CameraModalBodyComponentProps) => {
    const {iconName, text, onPress} = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{width: "30%"}}
            className={"rounded-md items-center justify-center aspect-square bg-neutral-300"}
        >
            <FontAwesome
                color={"rgb(38, 38, 38)"}
                name={iconName} size={24} />
            <Text className={"font-medium text-xs text-neutral-800"}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CameraModalBodyComponent;