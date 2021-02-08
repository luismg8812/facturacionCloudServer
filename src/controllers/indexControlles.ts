import {Request,Response} from 'express';
import db  from '../database';

class IndexControllers{
    public  async index (req:Request, res:Response){
        const tipoIdentificacion = await  db.query("select * from tipo_identificacion order by tipo_identificacion_id");              
        res.json(tipoIdentificacion.rows);
        //res.send(`<h1>intro index server
        //${tipoIdentificacion.rows}
        //</h1>`);
    }

} 


export const indexControllers = new IndexControllers();