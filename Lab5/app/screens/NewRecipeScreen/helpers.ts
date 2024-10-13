import {z} from "zod";

export const newRecipeSchema = z.object({
    name: z.string().min(1, {message: 'Name is required'}),
    image: z.string().min(1, {message: 'Image is required'}),
    instruction: z.string().min(1, {message: 'Instruction is required'}),
    ingredients: z.array(z.object({name: z.string(), amount: z.string()}))
        .min(1, {message: 'At least one ingredient is required'})
});

export const newIngredientSchema = z.object({
    name: z.string().min(1, {message: 'Name is required'}),
    amount: z.string().min(1, {message: 'Amount is required'})
})
