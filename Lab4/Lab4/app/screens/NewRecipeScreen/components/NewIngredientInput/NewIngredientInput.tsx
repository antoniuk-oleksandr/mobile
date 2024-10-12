import {Text, TextInput, View} from "react-native";

type NewIngredientProps = {
    value: string,
    setValue: (value: string) => void,
    placeholder: string,
    label: string,
}

const NewIngredientInput = (props: NewIngredientProps) => {
    const {label, value, placeholder, setValue} = props;

    return (
        <View className={"mb-4"}>
            <Text
                className={"text-base mb-1 text-neutral-800"}
            >{label}</Text>
            <TextInput
                value={value}
                onChangeText={(value) => setValue(value)}
                placeholder={placeholder}
                placeholderTextColor={"rgb(163 163 163)"}
                className={"rounded-md bg-white text-neutral-800 text-base py-2 px-3 border border-neutral-300 focus:border-green-600 "}
            />

        </View>
    )
}

export default NewIngredientInput;