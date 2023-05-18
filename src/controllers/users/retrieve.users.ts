import {Request, Response} from "express";
import {DbUsersRepository} from "../../repository/db.users.repository";
import {UsersRepository} from "../../repository/users.repository";

const retrieveUsers = (req: Request, res: Response): void => {
    const userRepository: UsersRepository = new DbUsersRepository();
    userRepository.retrieveUsers()
        .then((data) => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
}

export {retrieveUsers};
