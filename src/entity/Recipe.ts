import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number;

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

    @Column({ default: false })
    is_deleted: boolean;
}
