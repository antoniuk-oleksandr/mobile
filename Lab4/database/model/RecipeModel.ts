import {Model} from "@nozbe/watermelondb";

export default class RecipeModel extends Model {
    static table = 'recipes';
    static associations = {
        ingredients: {type: 'has_many', foreignKey: 'recipe_id'},
    };
}