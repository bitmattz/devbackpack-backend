
import express, {Router} from 'express';
import GenerateCPF from '../services/Generators/GenerateCPF';
import GenerateCNPJ from '../services/Generators/GenerateCNPJ';
import GenerateLorem from '../services/Generators/GenerateLorem';
const sessionsRouter = Router();


sessionsRouter.post('/generateCNPJ', async (request, response) => {
    const generateCNPJ = new GenerateCNPJ();
    return response.json(generateCNPJ.execute());
});

sessionsRouter.post('/generateCPF', async (request, response) => {
    const generateCPF = new GenerateCPF();
    return response.json(generateCPF.execute());
});

sessionsRouter.post('/generateLorem', async (request, response) => {
    const generateLorem = new GenerateLorem();
    return response.json(generateLorem.execute());
});

export default sessionsRouter;

