import config from './config';
import { createConnection } from 'typeorm';

let dbOptions = require('../ormconfig.json');

if (config.DATABASE_URL) {
    dbOptions.driver.url = config.DATABASE_URL;
}

export function openDbConnection() {
    // note that its not active database connection
    // TypeORM creates you connection pull to uses connections from pull on your requests
    return createConnection(dbOptions)
        .then(
            connection => console.log(`TypeORM DB connection successful: ${connection.name}`),
            error => console.log("TypeORM DB connection error: ", error)
        );
}