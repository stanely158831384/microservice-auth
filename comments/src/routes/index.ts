import express, {Request, Response} from 'express'; 
import { Comment } from '../models/comment';
const router = express.Router();

router.get('/api/comments',async(req: Request, res: Response)=>{
    const comment = await Comment.find({})

    res.send(comment);
})

export{router as indexCommentRouter}

