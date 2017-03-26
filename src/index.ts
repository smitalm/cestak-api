import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import api from './api';
import config from './config';
import { openDbConnection } from './db';

openDbConnection().then(async () => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // mount REST api
    app.use('/api', api);

    // run app
    app.listen(config.PORT);

    console.log(`Express application is up and running on port ${config.PORT}`);

});
