import {View} from "react-native";
import Input from "../../../../../../../general-components/Input/Input";
import {Control} from "react-hook-form";
import {Ingredient} from "../../../../../../../types/Ingredient";

type NewIngredientModalBodyProps = {
    control: Control<Ingredient>
}

const NewIngredientModalBody = (props: NewIngredientModalBodyProps) => {
    const {control} = props;

    return (
        <View>
            <Input
                name={'name'}
                placeholder={'Enter the name'}
                label={'Name'}
                control={control}
            />
            <Input
                name={'amount'}
                placeholder={'Enter the amount'}
                label={'Amount'}
                control={control}
            />
        </View>
    )
}

export default NewIngredientModalBody;