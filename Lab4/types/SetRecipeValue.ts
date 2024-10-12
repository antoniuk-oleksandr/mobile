import {Recipe} from "./Recipe";

export type SetRecipeValue = (name: keyof Recipe, value: any) => void;
