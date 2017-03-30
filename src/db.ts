import config from './config';
import { createConnection } from 'typeorm';
import { logger } from './logger';

let dbOptions = require('../ormconfig.json')[0];

if (config.DATABASE_URL) {
    dbOptions.driver.url = config.DATABASE_URL;
}

export function openDbConnection() {
    // note that its not active database connection
    // TypeORM creates you connection pull to uses connections from pull on your requests
    return createConnection(dbOptions)
        .then(
            connection => logger.info(`TypeORM DB connection successful: ${connection.name}`),
            error => logger.error("TypeORM DB connection error: ", error)
        );
}