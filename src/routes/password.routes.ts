
import express, {Router} from 'express';
import { Password } from '../models/Password';
import { CreatePasswordService } from '../services/Password/CreatePassword';

const sessionsRouter = Router();


sessionsRouter.post('/', async (request, response) => {
    let password: Password = request.body;
    const createPassword = new CreatePasswordService();
    password = createPassword.execute(password);

    return response.json(password);



});

export default sessionsRouter;

