import "reflect-metadata"
import {DataSource} from "typeorm";
import {UserEntity} from "./user.entity";

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db.sql",
    entities: [UserEntity],
    synchronize: true,
    logging: false,
});

export {AppDataSource}
