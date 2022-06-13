import { requireAuth, validateRequest, BadRequestError, NotAuthorizedError, NotFoundError, OrderStatus } from '@racoonrepublic/common';
import express, {Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post('/api/posts',
requireAuth,
[
    body('title')
        .not()
        .isEmpty(),
    body('detail')
        .not()
        .isEmpty()
    body('')
    
],
validateRequest,async (req: Request, res: Response)=>{
    const {title, order} = req.body;

})