import {Entity, Column} from "typeorm";
import {Common} from "./Common";

@Entity()
export class Recipe extends Common {
    @Column()
    name_en: string;

    @Column()
    name_al: string;

    @Column()
    cooking_time: number;

    @Column()
    resting_time: number;

    @Column()
    preparation_time: number;
}
