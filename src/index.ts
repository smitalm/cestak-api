import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import api from './api';
import config from './config';

// create connection with database
// note that its not active database connection
// TypeORM creates you connection pull to uses connections from pull on your requests
createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // mount REST api
    app.use('/api', api);

    // run app
    app.listen(config.PORT);

    console.log(`Express application is up and running on port ${config.PORT}`);

}).catch(error => console.log("TypeORM connection error: ", error));
