import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1637323091542 implements MigrationInterface {
    name = 'InitialMigration1637323091542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`recipe\` (\`is_deleted\` tinyint(1) NOT NULL DEFAULT '0', \`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`modified_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`name_en\` varchar(255) NOT NULL, \`name_al\` varchar(255) NOT NULL, \`cooking_time\` int NOT NULL, \`resting_time\` int NOT NULL, \`preparation_time\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`age\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`recipe\``);
    }

}
