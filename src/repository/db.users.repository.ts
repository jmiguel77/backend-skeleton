import {UsersRepository} from "./users.repository";
import {User} from "../models/user";
import {UserEntity} from "../persistence/user.entity";
import {AppDataSource} from "../persistence";
import {Repository} from "typeorm";

export class DbUsersRepository implements UsersRepository {

    repository: Repository<UserEntity> = AppDataSource.getRepository(UserEntity);

    async createUser(user: User) {
        const entity: UserEntity = new UserEntity();
        entity.name = user.name;
        entity.email = user.email;

        await this.repository.save(entity);
    }

    async retrieveUsers(): Promise<Array<User>> {
        const entities = await this.repository.find();
        const users = new Array<User>();
        entities.forEach(e => users.push({id: e.id, name: e.name, email: e.email} as User));
        return users;
    }

}
