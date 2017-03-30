import "reflect-metadata";
import * as express from "express";
import * as cors from 'cors'
import * as bodyParser from "body-parser";
import api from './api';
import config from './config';
import { openDbConnection } from './db';
import { logger, handleClientError, logError, logRequest } from './logger';

openDbConnection().then(async () => {

    // create express app
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    // mount error handlers
    app.use(logRequest);
    app.use(logError);
    app.use(handleClientError);

    // mount REST api
    app.use('/api', api);

    // run app
    app.listen(config.PORT);

    logger.info(`Express application is up and running on port ${config.PORT}`);

});
