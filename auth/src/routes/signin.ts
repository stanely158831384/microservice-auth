import express, { Request, Response} from 'express';
import { body } from 'express-validator';
import { User } from '../models/user';
import { validateRequest,BadRequestError } from '@racoonrepublic/common';
import { Password } from '../services/password';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/api/users/signin',[
    body('email')
      .isEmail()
      .withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password')
],
validateRequest,
async (req: Request,res: Response)=>{
    const { email, password } = req.body;

    const exixtingUser = await User.findOne({email});
    if(!exixtingUser){
        throw new BadRequestError('Invalid credentials');
    }

    const passwordsMatch = await Password.compare(exixtingUser.password,password);
    if(!passwordsMatch){
        throw new BadRequestError('Invalid Credenttials');
    }

    const userJwt = jwt.sign({
        id: exixtingUser.id,
        email: exixtingUser.email
    }, 
    process.env.JWT_KEY!
    );

    req.session = {
        jwt: userJwt
    }

    res.status(200).send(exixtingUser);
})

export {router as signinRouter};