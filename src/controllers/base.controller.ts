import {Request, Response} from "express";

export interface BaseController {
    execute(req: Request, res: Response): void;
}
