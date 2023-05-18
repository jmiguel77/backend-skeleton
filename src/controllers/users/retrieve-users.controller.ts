import {Request, Response} from "express";
import {Container, Service} from "typedi";
import {BaseController} from "../base.controller";
import {DbUsersRepository} from "../../repository/db.users.repository";
import {UsersRepository} from "../../repository/users.repository";

@Service({global: true})
export class RetrieveUsersController implements BaseController {

    execute(req: Request, res: Response): void {
        const userRepository: UsersRepository = Container.get(DbUsersRepository);
        userRepository.retrieveUsers()
            .then((data) => res.send(data))
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            })
    }
}



