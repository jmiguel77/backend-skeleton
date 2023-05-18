import express from "express";
import {Container} from "typedi";
import {CreateUserController} from "../controllers/users/create-user.controller";
import {RetrieveUsersController} from "../controllers/users/retrieve-users.controller";

const usersRouter = express.Router();
const createUserController: CreateUserController = Container.get(CreateUserController);
const retrieveUsersController: RetrieveUsersController = Container.get(RetrieveUsersController);

usersRouter.post('', createUserController.execute);
usersRouter.get('', retrieveUsersController.execute);

export {usersRouter};
