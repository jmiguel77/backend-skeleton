import "reflect-metadata"
import express, {Express} from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import {router} from "./routes";
import {AppDataSource} from "./persistence";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use('/api', router);

AppDataSource.initialize()
    .then(() => {
        app.listen(port, () => {
            console.log(`server started at http://localhost:${port}`);
        })
    })
    .catch((err) => console.log(err));


