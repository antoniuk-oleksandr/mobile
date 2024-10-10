import {create} from "zustand/react";
import {RecipesState} from "../types/RecipesState";

export const useRecipes = create<RecipesState>((set) => ({
    recipes: [],
    setRecipes: (recipes) => set({recipes}),
    addRecipe: (recipe) => set((state) => ({recipes: [...state.recipes, recipe]})),
}));