import { Router } from 'express';
import bill from './bill';
import car from './car';
import route from './route';
import trip from './trip';

let api = Router();

api.use('/bill', bill);
api.use('/car', car);
api.use('/route', route);
api.use('/trip', trip);

export default api;
