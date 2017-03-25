import { version } from '../../package.json';
import { Router } from 'express';
import bills from './bills';

let api = Router();

// mount the facets resource
api.use('/bill', bills);

// perhaps expose some API metadata at the root
api.get('/', (req, res) => {
    res.json({ version });
});

export default api;
