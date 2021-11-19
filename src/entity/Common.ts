import {PrimaryGeneratedColumn, Column, BeforeUpdate} from "typeorm";
import { SoftDelete } from "./SoftDelete";

export abstract class Common extends SoftDelete {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('timestamp', {
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false,
        name: 'created_at'
    })
    public created_at: Date;

    @Column('timestamp', {
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false,
        name: 'modified_at'
    })
    public modified_at: Date;

    @BeforeUpdate()
    public addLastModified(): void {
        this.modified_at = new Date();
    }
}
