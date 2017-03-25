import { Router } from 'express';

let api = Router();

api.get('/', (req, res) => {
    res.json([
        {
            price: 10,
            amount: 10
        }
    ]);
});

export default api;
