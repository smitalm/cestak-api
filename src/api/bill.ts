import { Router, Request, Response } from "express";
import { getEntityManager } from "typeorm";
import { Bill } from '../entity/Bill';

// CRUD api for Bill entity
let bill = Router();


// Create
bill.post('/', async (req: Request, res: Response) => {
    const billRepository = getEntityManager().getRepository(Bill);
    const result = await billRepository.create(req.body);
    res.send(result);
});

// Read
bill.get('/', async (req: Request, res: Response) => {
    const billRepository = getEntityManager().getRepository(Bill);
    const result = await billRepository.find();
    res.send(result);
});

bill.get('/:id', async (req: Request, res: Response) => {
    const billRepository = getEntityManager().getRepository(Bill);
    const result = await billRepository.find(req.params.id);
    res.send(result);
});

// Update
bill.put('/', async (req: Request, res: Response) => {
    const billRepository = getEntityManager().getRepository(Bill);
    const result = await billRepository.find();
    res.send(result);
});

// Delete
bill.delete('/', async (req: Request, res: Response) => {
    const billRepository = getEntityManager().getRepository(Bill);
    const result = await billRepository.remove(req.body);
    res.send(result);
});

export default bill;