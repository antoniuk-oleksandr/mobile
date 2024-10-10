import {Animated, View} from "react-native";
import {useFieldArray, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {newRecipeSchema} from "./helpers";
import Input from "../../general-components/Input/Input";
import {Recipe} from "../../types/Recipe";
import ScrollView = Animated.ScrollView;
import {handleNewRecipeFormSubmit} from "./handlers";
import Button from "../../general-components/Button/Button";
import NewIngredientSection from "./components/NewIngredientSection/NewIngredientSection";
import {useRecipes} from "../../state-managment/use-recipes";
import {useNavigation} from "@react-navigation/native";
import RecipeImageSection from "./components/RecipeImageSection/RecipeImageSection";

const defaultValues = {
    name: '',
    instruction: '',
    ingredients: [],
    image: ''
} as Recipe;

const NewRecipeScreen = () => {
    const navigation = useNavigation();

    const {addRecipe} = useRecipes();
    const {
        control, handleSubmit, reset, watch,
        setValue, formState: {errors}
    } = useForm<Recipe>({
        defaultValues,
        resolver: zodResolver(newRecipeSchema)
    });

    const {append, remove, fields} = useFieldArray({
        control,
        name: 'ingredients'
    });

    return (
        <ScrollView
            contentContainerStyle={{flexGrow: 1, justifyContent: "space-between"}}
        >
            <View className={"p-4 flex-1 bg-neutral-100 justify-between"}>
                <View>
                    <Input
                        control={control}
                        name={'name'}
                        placeholder={'Enter the name'}
                        label={'Dish name'}
                    />
                    <RecipeImageSection
                        image={watch('image')}
                        setValue={setValue}
                        error={errors.image}
                    />
                    <NewIngredientSection
                        error={errors.ingredients}
                        append={append}
                        remove={remove}
                        fields={fields}
                    />
                    <Input
                        textArea
                        control={control}
                        name={'instruction'}
                        placeholder={'Enter the instruction'}
                        label={'Dish instruction'}
                    />
                </View>
                <Button
                    title={'Create New Recipe'}
                    onPress={handleSubmit((data) =>
                        handleNewRecipeFormSubmit(data, addRecipe, reset, navigation))}
                />
            </View>
        </ScrollView>
    );
}

export default NewRecipeScreen;
