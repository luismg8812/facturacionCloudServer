import {Request,Response} from 'express';
import db  from '../database';
import { documentoDetalleRepository } from '../repository/documentoDetalleRepository';

class DocumentoDetalleControllers{

    public async createDocumentoDetalle (req:Request, res:Response):Promise<any>{     
        
        let documento_id:number =req.body.documento_id;
        let producto_id:number =req.body.producto_id;
        let fecha_registro:Date =req.body.fecha_registro;
        let cantidad:number =req.body.cantidad;
        let estado:number =req.body.estado;
        let parcial:number =req.body.parcial;
        let unitario:number =req.body.unitario;
        let impreso_comanda:number =req.body.impreso_comanda;
        
        console.log(req.body);
        const id = await  db.query(documentoDetalleRepository.getIdDocumentoDetalle);
        const documento_detalle_id = id.rows[0].nextval; 
        console.log(documento_detalle_id);
        var query="INSERT INTO documento_detalle(documento_detalle_id,documento_id,producto_id,fecha_registro,cantidad,estado,parcial,unitario,impreso_comanda) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)";
        await db.query(query, [documento_id,producto_id,fecha_registro,cantidad,estado,parcial,unitario,impreso_comanda,documento_detalle_id]).then(res2=>{
            res.json({"code":200,"documento_detalle_id":documento_detalle_id});
        }).catch(error=>{
            res.json({"code":400,"documento_detalle_id":documento_detalle_id});
        });
        
    }
    
  
}
export const documentoDetalleControllers = new DocumentoDetalleControllers();