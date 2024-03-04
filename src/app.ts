import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routs';
import ErrorHandler from './middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application routers
app.use('/api/v1/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('working successfully');
});

// global error handler
app.use(ErrorHandler);
export default app;
