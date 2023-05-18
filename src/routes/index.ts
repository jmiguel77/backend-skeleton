import "reflect-metadata";
import {Router} from "express";
import usersRouter from "./users.routes";

const AppRouter = Router();

AppRouter.use('/users', usersRouter);

export default AppRouter;
