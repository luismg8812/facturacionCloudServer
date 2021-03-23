import {Request,Response} from 'express';
import { abonoRepository } from '../repository/abonoRepository';
import db  from '../database';
import { productoRepository } from '../repository/productoRepository';


class ControlInventarioControllers{
   
    public async getControlInventario(req: Request, res: Response): Promise<any> {
        const empresaId = req.query.empresaId;
        console.log(req.query);
        const productos = await db.query(productoRepository.getControlInventario, [empresaId]);
        res.json(productos.rows);
     }

     public async getControlInventarioByProductoId(req: Request, res: Response): Promise<any> {
        const productoId = req.query.productoId;
        console.log(req.query);
        const productos = await db.query(productoRepository.getControlInventarioByProductoId, [productoId]);
        res.json(productos.rows);
     }

     public async updateControlInventario(req: Request, res: Response): Promise<any> {
        var control_inventario_id = req.body.control_inventario_id;
        var producto_id = req.body.producto_id;
        var empresa_id = req.body.empresa_id;
        var nombre = req.body.nombre;
        var inicial = req.body.inicial;
        var entrada = req.body.entrada;
        var venta = req.body.venta;
        let query = " update control_inventario set producto_id=$2, empresa_id=$3,nombre=$4, inicial=$5,"
        +" entrada=$6, venta=$7 where control_inventario_id = $1 ";
  
        console.log(req.body);
        await db.query(query, [control_inventario_id, producto_id, empresa_id,nombre,inicial,entrada,venta]).then(res2 => {
           res.json({ "code": 200, "control_inventario_id": control_inventario_id });
           console.log(req.body);
        }).catch(error => {
           console.error("updateGrupo");
           res.json({ "code": 200, "control_inventario_id": control_inventario_id, "error:": error.error });
           console.log(error);
        });
     }

     
    
}
export const controlInventarioControllers = new ControlInventarioControllers();