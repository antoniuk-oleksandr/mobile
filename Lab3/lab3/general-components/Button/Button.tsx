import {Text, TouchableOpacity} from "react-native";

type ButtonProps = {
    onPress: () => void,
    title: string,
    extraButtonStyles?: string,
    extraTextStyles?: string
}

const Button = (props: ButtonProps) => {
    const {onPress, title, extraButtonStyles, extraTextStyles} = props;

    return (
        <TouchableOpacity
            className={`rounded-md py-2 px-3 bg-green-600 justify-center items-center 
            ${extraButtonStyles ? extraButtonStyles : ''}`}
            onPress={onPress}
        >
            <Text
                className={`font-semibold text-white text-base 
                ${extraTextStyles ? extraTextStyles : ''}`}
            >{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;