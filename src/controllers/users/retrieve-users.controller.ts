import {Request, Response} from "express";
import {Container, Service} from "typedi";
import {BaseController} from "../base.controller";
import {TypeormUsersRepository} from "../../repository/typeorm.users.repository";
import {UsersRepository} from "../../repository/users.repository";

@Service()
export class RetrieveUsersController implements BaseController {

    execute(req: Request, res: Response): void {
        const userRepository: UsersRepository = Container.get(TypeormUsersRepository);
        userRepository.retrieveUsers()
            .then((data) => res.send(data))
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            })
    }
}



