import {SQLiteDatabase} from "expo-sqlite";
import {Recipe} from "../../types/Recipe";
import {RecipeModel} from "../models/RecipeModel";
import {IngredientModel} from "../models/IngredientModel";
import {FullRecipe} from "../../types/FullRecipe";

let semaphore = require('semaphore')(1);
const limit = 20;

export const createTable = async (sql: string, db: SQLiteDatabase) => {
    semaphore.take(async () => {
        try {
            await db.execAsync(sql);
        } catch (e) {
            console.error('Error creating table:', e);
        } finally {
            semaphore.leave();
        }
    });
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

    semaphore.take(async () => {
        try {
            await db.execAsync(recipeQuery);
            const id = await getLastInsertIdId(db);
            for (let ingredient of ingredients) {
                await db.execAsync(
                    `INSERT INTO ingredients (name, amount, recipe_id)
                     VALUES ('${ingredient.name}', '${ingredient.amount}', ${id})`
                );
            }
        } catch (e) {
            console.error('Error adding recipe:', e);
        } finally {
            semaphore.leave();
        }
    });
};

export const getRecipeById = async (
    db: SQLiteDatabase, id: number
): Promise<FullRecipe | null> => {
    try {
        const recipeModel = await db.getFirstAsync(`
            SELECT *
            FROM recipes
            WHERE recipe_id = ${id}
        `) as RecipeModel;
        const ingredientModels = await db.getAllAsync(`
            SELECT *
            FROM ingredients
            WHERE recipe_id = ${recipeModel.recipe_id}
        `) as IngredientModel[];
        return {
            ...recipeModel,
            ingredients: ingredientModels
        } as unknown as FullRecipe;
    } catch (e) {
        console.error('Error loading database:', e);
        return null;
    }
}

export const getLastInsertIdId = async (
    db: SQLiteDatabase
): Promise<number> => {
    const {id} = await db.getFirstAsync(
        "SELECT last_insert_rowid() as id"
    ) as { id: number };
    return id;
}

export const getSomeRecipes = async (
    db: SQLiteDatabase,
    page: number,
    additionalOffset: number,
): Promise<FullRecipe[]> => {
    const offset = (page - 1) * limit + additionalOffset;

    let recipeModels = await db.getAllAsync(
        `SELECT *
         FROM recipes
         ORDER BY recipe_id
                 DESC LIMIT ${limit}
         OFFSET ${offset}`
    ) as RecipeModel[];

    const recipes = await Promise.all(recipeModels.map(async (item) => ({
        ...item,
        ingredients: await db.getAllAsync(`
            SELECT *
            FROM ingredients
            WHERE recipe_id = ${item.recipe_id}
        `)
    })));

    return recipes as unknown as FullRecipe[];
}

export const getRecipesRemaining = async (
    db: SQLiteDatabase,
    page: number,
    additionalOffset: number,
): Promise<number | null> => {
    const offset = (page - 1) * limit + additionalOffset;

    try {
        const {count} = await db.getFirstAsync(
            `SELECT COUNT(*) AS count
             FROM recipes`
        ) as { count: number };

        return count - offset;
    } catch (e) {
        console.error('Error getting count:', e);
        return null;
    }

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