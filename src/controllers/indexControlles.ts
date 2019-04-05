import {Request,Response} from 'express';

class IndexControllers{
    public index (req:Request, res:Response){
        res.send("<h1>intro index server</h1>");
    }

} 


export const indexControllers = new IndexControllers();