import MyModal from "../../../../general-components/MyModal/MyModal";
import {Dispatch, SetStateAction} from "react";
import {View} from "react-native";
import CameraModalHeader from "./components/CameraModalHeader/CameraModalHeader";
import CameraModalBody from "./components/CameraModalBody/CameraModalBody";
import {SetRecipeValue} from "../../../../types/SetRecipeValue";

type CameraModalProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    setValue: SetRecipeValue,
}

const CameraModal = (props: CameraModalProps) => {
    const {isOpen} = props;

    return (
        <MyModal isOpen={isOpen}>
            <View className={"w-full bg-neutral-100 p-4 rounded-md"}>
                <CameraModalHeader {...props}/>
                <CameraModalBody {...props}/>
            </View>
        </MyModal>
    )
}

export default CameraModal;