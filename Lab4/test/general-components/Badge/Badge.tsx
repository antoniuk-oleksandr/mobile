import {Text, View} from "react-native";

type BadgeProps = {
    text: string,
}

const Badge = (props: BadgeProps) => {
    const {text} = props;

    return (
        <View className={"bg-green-600 rounded-full py-2 px-4 self-start"}>
            <Text className={"text-white font-medium text-xs text-center"}>{text}</Text>
        </View>
    )
}

export default Badge;