import {SQLiteDatabase} from "expo-sqlite";
import {Recipe} from "../../types/Recipe";
import {RecipeModel} from "../model/RecipeModel";
import {IngredientModel} from "../model/IngredientModel";

export const createTable = async (sql: string, db: SQLiteDatabase) => {
    try {
        await db.execAsync(sql);
    } catch (e) {
        console.error('Error creating table:', e); // Log any error that occurs
    }
};

export const insertRecipeToDB = async (
    db: SQLiteDatabase,
    recipe: Recipe,
) => {
    const {name, instruction, image, tags, ingredients} = recipe;

    const recipeQuery = recipe.tags === undefined
        ? `INSERT INTO recipes (name, instruction, image)
           VALUES ('${name}', '${instruction}', '${image}')`
        : `INSERT INTO recipes (name, instruction, image, tags)
           VALUES ('${name}', '${instruction}', '${image}', '${tags}')`;

    try {
        await db.execAsync(recipeQuery);
        const {id} = await db.getFirstAsync(
            "SELECT last_insert_rowid() as id"
        ) as { id: number };
        for (let ingredient of ingredients) {
            await db.execAsync(`INSERT INTO ingredients (name, amount, recipe_id)
                                VALUES ('${ingredient.name}', '${ingredient.amount}', ${id})`)
        }
    } catch (e) {
        console.error('Error adding recipe:', e);
    }
};

export const getRecipeById = async (db: SQLiteDatabase, id: number): Promise<Recipe | null> => {
    try {
        const recipeModel = await db.getFirstAsync(`
            SELECT *
            FROM recipes
            WHERE recipe_id = 1
        `) as RecipeModel;
        const ingredientModels = await db.getAllAsync(`
            SELECT *
            FROM ingredients
            WHERE recipe_id = ${recipeModel.recipe_id}
        `) as IngredientModel[];
        return {
            ...recipeModel,
            ingredients: ingredientModels
        } as unknown as Recipe;
    } catch (e) {
        console.error('Error loading database:', e);
        return null;
    }
}

export const getAllRecipes = async (db: SQLiteDatabase): Promise<Recipe[]> => {
    let recipeModels = await db.getAllAsync("SELECT * FROM recipes") as RecipeModel[];

    const recipes = await Promise.all(recipeModels.map(async (item) => ({
        ...item,
        ingredients: await db.getAllAsync(`
            SELECT *
            FROM ingredients
            WHERE recipe_id = ${item.recipe_id}
        `)
    })));

    return recipes as unknown as Recipe[];
}





export const tryToCreateTables = async (db: SQLiteDatabase) => {
    await createTable(
        "CREATE TABLE IF NOT EXISTS recipes (recipe_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL, instruction TEXT NOT NULL, tags VARCHAR(255), image TEXT)",
        db
    );

    await createTable(
        "CREATE TABLE IF NOT EXISTS ingredients (ingredient_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL, amount VARCHAR(255) NOT NULL, recipe_id INTEGER NOT NULL REFERENCES recipes (recipe_id))",
        db
    );
}