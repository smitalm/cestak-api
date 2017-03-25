import { Router, Request, Response } from "express";
import { getEntityManager } from "typeorm";
import { Trip } from '../entity/Trip';

// CRUD api for Trip entity
let trip = Router();


// Create
trip.post('/', async (req: Request, res: Response) => {
    const tripRepository = getEntityManager().getRepository(Trip);
    const result = await tripRepository.create(req.body);
    res.send(result);
});

// Read
trip.get('/', async (req: Request, res: Response) => {
    const tripRepository = getEntityManager().getRepository(Trip);
    const result = await tripRepository.find();
    res.send(result);
});

trip.get('/:id', async (req: Request, res: Response) => {
    const tripRepository = getEntityManager().getRepository(Trip);
    const result = await tripRepository.find(req.params.id);
    res.send(result);
});

// Update
trip.put('/', async (req: Request, res: Response) => {
    const tripRepository = getEntityManager().getRepository(Trip);
    const result = await tripRepository.find();
    res.send(result);
});

// Delete
trip.delete('/', async (req: Request, res: Response) => {
    const tripRepository = getEntityManager().getRepository(Trip);
    const result = await tripRepository.remove(req.body);
    res.send(result);
});

export default trip;