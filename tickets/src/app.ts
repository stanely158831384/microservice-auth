import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler , NotFoundError,currentUser} from '@racoonrepublic/common';
import { createTicketRouter } from './routes/new';


const app = express();
//this command is about the cookie-session
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
)
app.use(currentUser);

app.use(createTicketRouter);

app.all('*',async()=>{
  throw new NotFoundError();
})

app.use(errorHandler);


export { app }