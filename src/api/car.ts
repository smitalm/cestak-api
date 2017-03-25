import { Router, Request, Response } from "express";
import { getEntityManager } from "typeorm";
import { Car } from '../entity/Car';

// CRUD api for Car entity
let car = Router();


// Create
car.post('/', async (req: Request, res: Response) => {
    const carRepository = getEntityManager().getRepository(Car);
    const result = await carRepository.create(req.body);
    res.send(result);
});

// Read
car.get('/', async (req: Request, res: Response) => {
    const carRepository = getEntityManager().getRepository(Car);
    const result = await carRepository.find();
    res.send(result);
});

car.get('/:id', async (req: Request, res: Response) => {
    const carRepository = getEntityManager().getRepository(Car);
    const result = await carRepository.find(req.params.id);
    res.send(result);
});

// Update
car.put('/', async (req: Request, res: Response) => {
    const carRepository = getEntityManager().getRepository(Car);
    const result = await carRepository.find();
    res.send(result);
});

// Delete
car.delete('/', async (req: Request, res: Response) => {
    const carRepository = getEntityManager().getRepository(Car);
    const result = await carRepository.remove(req.body);
    res.send(result);
});

export default car;