import {Control, Controller} from "react-hook-form";
import {TextInput, View, Text} from "react-native";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Label from "../Label/Label";

type InputProps = {
    name: any,
    placeholder: string,
    label: string,
    control: Control<any>,
    textArea?: boolean
}

const Input = (props: InputProps) => {
    const {name, placeholder, label, textArea, control} = props;

    return (
        <Controller
            control={control}
            name={name}
            render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
                <View className={"mb-4"}>
                    <Label text={label} error={!!error}/>
                    <TextInput
                        multiline={textArea}
                        numberOfLines={textArea ? 8 : 1}
                        style={{textAlignVertical: textArea ? 'top' : 'center'}}
                        className={`rounded-md bg-white text-neutral-800 text-base py-2 px-3 border border-neutral-300 focus:border-green-600 ${error ? 'border-red-500' : ''}`}
                        placeholder={placeholder}
                        placeholderTextColor={error ? '#ef4444' : 'rgb(163 163 163)'}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                    <ErrorMessage message={error?.message}/>
                </View>
            )}/>
    )
}

export default Input;