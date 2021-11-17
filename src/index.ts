import "reflect-metadata";
import {createConnection} from "typeorm";
import { Recipe } from "./entity/Recipe";
import {ImportFile} from "./import";

createConnection().then(async connection => {
    const fileImport = new ImportFile();

    fileImport.insertRecipes();
}).catch(error => console.log(error));
