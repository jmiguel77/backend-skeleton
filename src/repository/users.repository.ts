import {User} from "../models/user";

export interface UsersRepository {
    createUser(user: User): void;

    retrieveUsers(): Promise<Array<User>>;
}
