import db  from '../database';
import {Request,Response} from 'express';
import { marcaRepository } from '../repository/marcaRepository';

class MarcaControllers{

    public async getMarcas(req:Request, res:Response):Promise<any>{
        const marcas = await  db.query(marcaRepository.getMarcas);       
             res.json(marcas.rows);  
    }

    public async getModeloByMarca(req:Request, res:Response):Promise<any>{
        const marcaId = req.query.marcaId; 
        const productos = await  db.query(marcaRepository.getModeloByMarca,[marcaId]);       
             res.json(productos.rows);  
    }

    public async getModeloById(req:Request, res:Response):Promise<any>{
        const modeloId = req.query.modeloId; 
        const productos = await  db.query(marcaRepository.getModeloById,[modeloId]);       
             res.json(productos.rows);  
    }

    

    
}
export const marcaControllers = new MarcaControllers();