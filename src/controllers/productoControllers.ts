import {Request,Response} from 'express';
import { productoRepository } from '../repository/productoRepository';
import db  from '../database';

class ProductoControllers{
    
    public async getProductosByEmpresa(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const productos = await  db.query(productoRepository.getProductosByEmpresa,[empresaId]);       
             res.json(productos.rows);  
    }
}
export const productoControllers = new ProductoControllers();