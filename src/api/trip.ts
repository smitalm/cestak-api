import { Router, Request, Response, NextFunction } from "express";
import { getEntityManager } from "typeorm";
import { Trip } from '../entity/Trip';

// CRUD api for Trip entity
let trip = Router();


// Create
trip.post('/', (req: Request, res: Response, next: NextFunction) => {
    const tripRepository = getEntityManager().getRepository(Trip);
    tripRepository
        .persist(req.body)
        .then(result => res.send(result))
        .catch(error => next(error));
});

// Read
trip.get('/', (req: Request, res: Response, next: NextFunction) => {
    const tripRepository = getEntityManager().getRepository(Trip);
    tripRepository
        .createQueryBuilder('trip')
        .orderBy('trip.startTime', 'DESC')
        .leftJoinAndSelect("trip.startLocation", "startLocation")
        .leftJoinAndSelect("trip.endLocation", "endLocation")
        .getMany()
        .then(result => res.send(result))
        .catch(error => next(error));
});

trip.get('/:id', async (req: Request, res: Response) => {
    const tripRepository = getEntityManager().getRepository(Trip);
    const result = await tripRepository.find(req.params.id);
    res.send(result);
});

// Update
trip.put('/', (req: Request, res: Response, next: NextFunction) => {
    const tripRepository = getEntityManager().getRepository(Trip);
    tripRepository.persist(req.body)
        .then(result => res.send(result))
        .catch(error => next(error));
});

// Delete
trip.delete('/', async (req: Request, res: Response) => {
    const tripRepository = getEntityManager().getRepository(Trip);
    const result = await tripRepository.remove(req.body);
    res.send(result);
});

export default trip;