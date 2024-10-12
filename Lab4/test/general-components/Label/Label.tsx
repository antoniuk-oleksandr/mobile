import {Text} from "react-native";

export type LabelProps = {
    text: string,
    error?: boolean,
}

const Label = (props: LabelProps) => {
    const {text, error} = props;

    return (
        <Text
            className={`text-base mb-1 font-medium 
            ${error ? "text-red-500" : "text-neutral-800"}`}
        >{text}</Text>
    )
}

export default Label;