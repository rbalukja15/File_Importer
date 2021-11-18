import {Column} from "typeorm";

export abstract class SoftDelete {
    @Column('tinyint', {
        default: 0,
        name: 'is_deleted',
        nullable: false,
        width: 1
    })

    public is_deleted: boolean;
}
