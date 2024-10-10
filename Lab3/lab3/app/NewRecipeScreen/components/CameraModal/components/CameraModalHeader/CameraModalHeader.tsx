import {Text, View} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import {Dispatch, SetStateAction} from "react";

type CameraModalHeaderProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const CameraModalHeader = (props: CameraModalHeaderProps) => {
    const {setIsOpen} = props;

    return (
        <View className={"justify-between flex-row mb-4"}>
            <Text>Select Image</Text>
            <AntDesign
                onPress={() => setIsOpen(false)}
                name="close"
                size={24}
                color="#252525"
            />
        </View>
    )
}

export default CameraModalHeader;