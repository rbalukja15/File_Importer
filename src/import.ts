import {Recipe} from "./entity/Recipe";
import {getRepository} from "typeorm";

const XLSX = require('xlsx');

interface IRecipe {
    id: number;
    name_en: string;
    name_al: string;
    cooking_time: number;
    resting_time: number;
    preparation_time: number;
}

export class ImportFile {
    private readonly recipeData: IRecipe[];

    constructor() {
        const workbook = XLSX.readFile('file_to_import.xlsx');
        const recipesWorksheet = workbook.Sheets.recipes;
        this.recipeData = XLSX.utils.sheet_to_json(recipesWorksheet);
    }

    public insertRecipes(): void {
        if (!Array.isArray(this.recipeData) || this.recipeData.length === 0) {
            return null;
        }

        this.recipeData.forEach(async r => {
            const recipe = new Recipe();

            recipe.name_en = r.name_en;
            recipe.name_al = r.name_al;
            recipe.cooking_time = r.cooking_time;
            recipe.resting_time = r.resting_time;
            recipe.preparation_time = r.preparation_time;

            const repository = getRepository(Recipe);

            await repository.save(recipe);
        })
    }

}
