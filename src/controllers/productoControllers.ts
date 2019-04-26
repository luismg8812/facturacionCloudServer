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

    public async updateCantidad(req:Request, res:Response):Promise<any>{
        var producto_id =req.body.producto_id; 
        var cantidad =req.body.cantidad; 
        let query="update producto set cantidad=$1 where producto_id = $2";
         await  db.query(query,[cantidad,producto_id]).then(res2=>{
            res.json({"code":200,"producto_id":producto_id});
         }).catch(error=>{
            res.json({"code":200,"producto_id":producto_id,"error:":error.error});
         });       
         
    }

    

    
}
export const productoControllers = new ProductoControllers();