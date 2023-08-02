
import express, {Router} from 'express';
import CountText from '../services/Text/CountText';
import InvertText from '../services/Text/InvertText';
import LowerText from '../services/Text/LowerText';
import UpperText from '../services/Text/UpperText';

const sessionsRouter = Router();


sessionsRouter.post('/countText', async (request, response) => {
    let {text} = request.body;
    const countText = new CountText();
    return response.json(countText.execute(text));

});

sessionsRouter.post('/invertText', async (request, response) => {
    let {text} = request.body;
    const invertText = new InvertText();
    return response.json(invertText.execute(text));

});

sessionsRouter.post('/lowerText', async (request, response) => {
    let {text} = request.body;
    const lowerText = new LowerText();
    return response.json(lowerText.execute(text));

});

sessionsRouter.post('/upperText', async (request, response) => {
    let {text} = request.body;
    const upperText = new UpperText();
    return response.json(upperText.execute(text));

});

export default sessionsRouter;

