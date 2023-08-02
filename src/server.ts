
import express, {Request,Response,NextFunction} from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from './errors/AppError';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error,request:Request,response:Response, _:NextFunction) => {
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () =>{
    console.log("🚀 Servidor rodando na porta 3333 ");
});


