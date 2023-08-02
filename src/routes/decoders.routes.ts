
import express, {Router} from 'express';
import BinDecodeEncode from '../services/Decoders/BinDecodeEncode';
import CesarCypher from '../services/Decoders/CesarCypher';
import EnigmaCypher from '../services/Decoders/EnigmaCypher';
import HexDecodeEncode from '../services/Decoders/HexDecodeEncode';
import VigenereCypher from '../services/Decoders/VigenereCypher';

const sessionsRouter = Router();

 
sessionsRouter.post('/binary', async (request, response) => {
    let {text, decode} = request.body;
    const binDecodeEncode = new BinDecodeEncode();
    return response.json(binDecodeEncode.execute(text,decode));

});

sessionsRouter.post('/cesar', async (request, response) => {
    let {text, shift, decode} = request.body;
    const cesarCypher = new CesarCypher();
    return response.json(cesarCypher.execute(text, shift, decode));

});

sessionsRouter.post('/enigma', async (request, response) => {
    let {text, key, decode} = request.body;
    const enigmaCypher = new EnigmaCypher();
    return response.json(enigmaCypher.execute(text,decode,key));

});

sessionsRouter.post('/hex', async (request, response) => {
    let {text,decode} = request.body;
    const hexDecodeEncode = new HexDecodeEncode();
    return response.json(hexDecodeEncode.execute(text,decode));

});


sessionsRouter.post('/vigenere', async (request, response) => {
    let {text,key,decode} = request.body;
    const vigenereCypher = new VigenereCypher();
    return response.json(vigenereCypher.execute(text,key,decode));

});

export default sessionsRouter;

