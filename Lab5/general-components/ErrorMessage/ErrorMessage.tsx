import {Text, View} from "react-native";

type ErrorMessageProps = {
    message?: string,
}

const ErrorMessage = (props: ErrorMessageProps) => {
    const {message} = props;

    if(!message) return null;
    return (
        <View>
            <Text className={"text-base text-red-500"}>* {message}</Text>
        </View>
    )
}

export default ErrorMessage;