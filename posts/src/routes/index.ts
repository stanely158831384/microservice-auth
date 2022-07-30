import express, {Request, Response} from 'express'; 
import { Post } from '../models/post';

const router = express.Router();

router.get('/api/posts', async(req: Request, res: Response)=>{
    const post = await Post.find({});

    res.send(post);
})

export{router as indexPostRouter}