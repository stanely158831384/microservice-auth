import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@racoonrepublic/common';
import { createCommentRouter } from './routes/new';
import { indexCommentRouter } from './routes/index';
import { deleteCommentRouter }from './routes/delete';
import { showCommentRouter } from './routes/show';

const app = express();
let secure: boolean = process.env.NODE_ENV === 'development';

app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure,
    })
)

app.use(currentUser);

app.use(createCommentRouter);
app.use(indexCommentRouter);
app.use(deleteCommentRouter);
app.use(showCommentRouter);


app.all('*',async()=>{
    throw new NotFoundError();
})

app.use(errorHandler);

export{ app }