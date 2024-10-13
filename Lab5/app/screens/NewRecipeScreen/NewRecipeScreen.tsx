import {Animated, View} from "react-native";
import {useFieldArray, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {newRecipeSchema} from "./helpers";
import Input from "../../../general-components/Input/Input";
import {Recipe} from "../../../types/Recipe";
import ScrollView = Animated.ScrollView;
import {handleNewRecipeFormSubmit} from "./handlers";
import Button from "../../../general-components/Button/Button";
import NewIngredientSection from "./components/NewIngredientSection/NewIngredientSection";
import {useNavigation} from "@react-navigation/native";
import RecipeImageSection from "./components/RecipeImageSection/RecipeImageSection";
import {useSQLiteContext} from "expo-sqlite";
import {useObserver} from "../../../state-managment/use-observer";
import {useNewRecipeFormState} from "../../../state-managment/use-new-recipe-form-state";
import {useEffect, useRef} from "react";

const NewRecipeScreen = () => {
    const navigation = useNavigation();
    const db = useSQLiteContext();
    const {setNewRecipe} = useObserver();
    const newRecipeFormState = useNewRecipeFormState();
    const {recipeVal, setRecipeVal} = newRecipeFormState;
    const isSubmitting = useRef(false);

    const {
        control, handleSubmit, watch, getValues,
        setValue, formState: {errors}
    } = useForm<Recipe>({
        defaultValues: recipeVal,
        resolver: zodResolver(newRecipeSchema)
    });

    useEffect(() => {
        return () => {
            if (isSubmitting.current) return;
            setRecipeVal(getValues());
        }
    }, []);

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
                        isSubmitting={isSubmitting}
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
                        handleNewRecipeFormSubmit(data, navigation, db, setNewRecipe, newRecipeFormState, isSubmitting))}
                />
            </View>
        </ScrollView>
    );
}

export default NewRecipeScreen;
