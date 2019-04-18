import {Request,Response} from 'express';
import { productoRepository } from '../repository/productoRepository';
import db  from '../database';

class ProductoControllers{
    
    public async getProductosByEmpresa(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const productos = await  db.query(productoRepository.getProductosByEmpresa,[empresaId]);       
             res.json(productos.rows);  
    }

    public async getProductoById(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const productoId = req.query.productoId; 
        const productos = await  db.query(productoRepository.getProductoById,[empresaId,productoId]);       
             res.json(productos.rows);  
    }

    
}
export const productoControllers = new ProductoControllers();