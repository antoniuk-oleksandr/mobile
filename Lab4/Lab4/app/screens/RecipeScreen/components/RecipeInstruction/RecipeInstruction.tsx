import {Text, View} from "react-native";
import RecipeLabel from "../RecipeLabel/RecipeLabel";

type RecipeInstructionProps = {
    instruction: string,
}

const RecipeInstruction = (props: RecipeInstructionProps) => {
    const {instruction} = props;

    return (
        <View className={"mb-4"}>
            <RecipeLabel text={'Instruction'}/>
            <Text className="text-neutral-800 text-base">{instruction}</Text>
        </View>
    )
}

export default RecipeInstruction;