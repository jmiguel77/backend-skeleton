import {Request, Response} from "express";
import {User} from "../../models/user";
import {Container, Service} from "typedi";
import {BaseController} from "../base.controller";
import {DbUsersRepository} from "../../repository/db.users.repository";
import {UsersRepository} from "../../repository/users.repository";

@Service({global: true})
export class CreateUserController implements BaseController {

    execute(req: Request, res: Response): void {
        const userRepository: UsersRepository = Container.get(DbUsersRepository);
        const user = req.body as User;
        userRepository.createUser(user)
            .then(() => res.send())
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            });
    }
}
