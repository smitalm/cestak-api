import { Router, Request, Response } from "express";
import { getEntityManager } from "typeorm";
import { Route } from '../entity/Route';

// CRUD api for Route entity
let route = Router();


// Create
route.post('/', async (req: Request, res: Response) => {
    const routeRepository = getEntityManager().getRepository(Route);
    const result = await routeRepository.create(req.body);
    res.send(result);
});

// Read
route.get('/', async (req: Request, res: Response) => {
    const routeRepository = getEntityManager().getRepository(Route);
    const result = await routeRepository.find();
    res.send(result);
});

route.get('/:id', async (req: Request, res: Response) => {
    const routeRepository = getEntityManager().getRepository(Route);
    const result = await routeRepository.find(req.params.id);
    res.send(result);
});

// Update
route.put('/', async (req: Request, res: Response) => {
    const routeRepository = getEntityManager().getRepository(Route);
    const result = await routeRepository.find();
    res.send(result);
});

// Delete
route.delete('/', async (req: Request, res: Response) => {
    const routeRepository = getEntityManager().getRepository(Route);
    const result = await routeRepository.remove(req.body);
    res.send(result);
});

export default route;