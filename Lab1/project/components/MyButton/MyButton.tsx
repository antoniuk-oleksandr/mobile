import {Button, Text, TouchableOpacity} from "react-native";
import {buttonStyles} from "../../styles/buttonStyles";
import {Dispatch, SetStateAction} from "react";
import {AppData} from "../../types/AppData";
import {handleMyButtonClick} from "../../handlers/handlers";

type MyButtonProps = {
    setAppData: Dispatch<SetStateAction<AppData>>,
    appData: AppData,
}

const MyButton = (props: MyButtonProps) => {
    const {appData, setAppData} = props;
    const {text} = appData;

    return (
        <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => handleMyButtonClick(appData, setAppData)}
        >
            <Text style={buttonStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default MyButton;