import {View} from "react-native";
import {Dispatch, SetStateAction} from "react";
import CameraModalBodyComponent from "../CameraModalBodyComponent/CameraModalBodyComponent";
import {removePhoto, uploadImage} from "../../../../photo-helpers";
import {SetRecipeValue} from "../../../../../../types/SetRecipeValue";

type CameraModalBodyProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    setValue: SetRecipeValue,
}

const CameraModalBody = (props: CameraModalBodyProps) => {
    const {setIsOpen, setValue} = props;

    return (
        <View className={"flex-row justify-between"}>
            <CameraModalBodyComponent
                iconName={'camera'}
                text={'Camera'}
                onPress={() => uploadImage('camera', setValue, setIsOpen)}
            />
            <CameraModalBodyComponent
                iconName={'file-photo-o'}
                text={'Gallery'}
                onPress={() => uploadImage('gallery', setValue, setIsOpen)}
            />
            <CameraModalBodyComponent
                iconName={'trash-o'}
                text={'Remove'}
                onPress={() => removePhoto(setValue, setIsOpen)}
            />
        </View>
    )
}

export default CameraModalBody;