import "reflect-metadata";
import {Router} from "express";
import {Container} from "typedi";
import {CreateUserController} from "../controllers/users/create-user.controller";
import {RetrieveUsersController} from "../controllers/users/retrieve-users.controller";

const createUserController: CreateUserController = Container.get(CreateUserController);
const retrieveUsersController: RetrieveUsersController = Container.get(RetrieveUsersController);
const usersRouter = Router();

usersRouter.post('', createUserController.execute);
usersRouter.get('', retrieveUsersController.execute);

export default usersRouter;
