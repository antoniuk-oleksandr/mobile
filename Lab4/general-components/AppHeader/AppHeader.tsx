import {Text, View} from "react-native";
import {ReactNode} from "react";

type AppHeaderProps = {
    text?: string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    extraStyles?: string
}

const AppHeader = (props: AppHeaderProps) => {
    const {extraStyles, leftIcon, rightIcon, text} = props;

    return (
        <View
            className={`bg-white w-full pt-14 h-28 flex-row justify-between items-center px-4 shadow relative ${extraStyles}`}
        >
            <View>{leftIcon}</View>
            <View>
                {text &&
                    <Text className={"text-2xl font-semibold text-neutral-800 text"}>{text}</Text>
                }
            </View>
            <View>{rightIcon}</View>
        </View>
    )
}

export default AppHeader;