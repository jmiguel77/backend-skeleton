import {Request, Response} from "express";
import {User} from "../../models/user";
import {DbUsersRepository} from "../../repository/db.users.repository";

const createUser = (req: Request, res: Response): void => {
    const user = req.body as User;
    const userRepository = new DbUsersRepository();
    userRepository.createUser(user)
        .then(() => res.send())
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
}

export {createUser};
