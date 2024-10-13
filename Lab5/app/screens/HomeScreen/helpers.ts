import {Recipe} from "../../../types/Recipe";
import {Ingredient} from "../../../types/Ingredient";

export const mapRandomRecipeResponseToRecipe = (response: any): Recipe => {
    return {
        name: formatValue(response.strMeal),
        tags: response.strTags !== null ? formatValue(response.strTags) : undefined,
        image: formatValue(response.strMealThumb),
        instruction: formatValue(response.strInstructions),
        ingredients: Array.from({length: 20}).reduce((acc, _, index) => {
            const name = formatValue(response[`strIngredient${index + 1}`]);
            const amount = formatValue(response[`strMeasure${index + 1}`]);
            return !name ? acc : [...acc as Ingredient[], {name, amount}];
        }, []) as Ingredient[],
    };
};

export const formatValue = (value: string): string => {
    return !value ? value : value.replaceAll('\'', '\'\'');
}