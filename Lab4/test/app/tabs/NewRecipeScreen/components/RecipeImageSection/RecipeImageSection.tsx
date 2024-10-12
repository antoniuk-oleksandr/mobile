import {useState} from "react";
import {Text, View} from "react-native";
import CameraModal from "../CameraModal/CameraModal";
import Button from "../../../../general-components/Button/Button";
import DishImage from "../DishPhoto/DishImage";
import {Recipe} from "../../../../types/Recipe";
import ErrorMessage from "../../../../general-components/ErrorMessage/ErrorMessage";
import {SetRecipeValue} from "../../../../types/SetRecipeValue";
import Label from "../../../../general-components/Label/Label";

type RecipeImageSectionProps = {
    error: any,
    setValue: SetRecipeValue,
    image: string,
}

const RecipeImageSection = (props: RecipeImageSectionProps) => {
    const {error, setValue, image} = props;
    const [isOpen, setIsOpen] = useState(false);
    const message = image.length === 0 && error?.message

    return (
        <View className={"mb-4"}>
            <Label error={message} text={"Dish picture"}/>
            <DishImage {...props}/>
            <CameraModal
                setValue={setValue}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <Button
                extraButtonStyles={"!bg-gray-500 self-end w-40"}
                title={'Select Image'}
                onPress={() => setIsOpen(true)}
            />
            <ErrorMessage message={message}/>
        </View>
    )
}

export default RecipeImageSection;