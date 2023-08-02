import {Router} from 'express';
import passwordRouter from './password.routes';
import textRouter from './text.routes';
import decodersRouter from './decoders.routes';
import generatorsRouter from './generators.routes';


const routes = Router();

routes.use('/password', passwordRouter);
routes.use('/text/', textRouter);
routes.use('/decoders/', decodersRouter);
routes.use('/generators/', generatorsRouter);


export default routes;
