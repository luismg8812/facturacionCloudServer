import {Request,Response} from 'express';

class IndexControllers{
    public index (req:Request, res:Response){
        res.send("intro index server");
    }

} 


export const indexControllers = new IndexControllers();