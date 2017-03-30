import * as winston from 'winston';
import { NextFunction, Request, Response } from "express";

export const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: true,
            colorize: true
        })
    ]
});

export function logRequest(req: Request, res: Response, next: NextFunction) {
    logger.debug(`${req.method} ${req.url}`);
    next();
}

export function logError(err: any, req: Request, res: Response, next: NextFunction) {
    logger.error(err);
    next(err);
}

export function handleClientError(err: any, req: Request, res: Response, next: NextFunction) {
    if (req.xhr) {
        res.status(500).send({ error: err });
    } else {
        next(err);
    }
}