import express from "express";
import {createUser, retrieveUsers} from "../controllers/users";

const usersRouter = express.Router();

usersRouter.post('', createUser);
usersRouter.get('', retrieveUsers);

export {usersRouter};
