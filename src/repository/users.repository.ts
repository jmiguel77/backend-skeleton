import {User} from "../models/user";

export interface UsersRepository {
    createUser(user: User): Promise<void>;

    retrieveUsers(): Promise<Array<User>>;
}
