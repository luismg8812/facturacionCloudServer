import {Request,Response} from 'express';
import db  from '../database';
import { documentoDetalleRepository } from '../repository/documentoDetalleRepository';

class DocumentoDetalleControllers{

    public async createDocumentoDetalle (req:Request, res:Response):Promise<any>{     
        
        let documento_id:number =req.body.documento_id;
        let producto_id:number =req.body.producto_id;
        let fecha_registro:Date =req.body.fecha_registro;
        console.log(fecha_registro);
        let cantidad:number =req.body.cantidad;
        let estado:number =req.body.estado;
        let parcial:number =req.body.parcial;
        let unitario:number =req.body.unitario;
        let impreso_comanda:number =req.body.impreso_comanda;
        let descripcion:number =req.body.descripcion;
        let impuesto_producto:number =req.body.impuesto_producto;
        
        
        console.log(req.body);
        const id = await  db.query(documentoDetalleRepository.getIdDocumentoDetalle);
        const documento_detalle_id = id.rows[0].nextval; 
        console.log(documento_detalle_id);
        var query="INSERT INTO documento_detalle(documento_detalle_id, documento_id, producto_id, fecha_registro, cantidad, estado,parcial,unitario,impreso_comanda,descripcion,impuesto_producto) VALUES ($9,$1,$2,$3,$4,$5,$6,$7,$8,$10,$11)";
        await db.query(query, [documento_id,producto_id,fecha_registro,cantidad,estado,parcial,unitario,impreso_comanda,documento_detalle_id,descripcion,impuesto_producto]).then(res2=>{
            res.json({"code":200,"documento_detalle_id":documento_detalle_id});
        }).catch(error=>{
            console.log(error);
            res.json({"code":400,"documento_detalle_id":documento_detalle_id,"error":error.error});
        });      
    }

    public async updateDocumentoDetalle (req:Request, res:Response):Promise<any>{ 
        
        let documento_detalle_id:number =req.body.documento_detalle_id;
        let documento_id:number =req.body.documento_id;
        let producto_id:number =req.body.producto_id;
        let fecha_registro:Date =req.body.fecha_registro;
        console.log(fecha_registro);
        let cantidad:number =req.body.cantidad;
        let estado:number =req.body.estado;
        let parcial:number =req.body.parcial;
        let unitario:number =req.body.unitario;
        let impreso_comanda:number =req.body.impreso_comanda;
        let descripcion:number =req.body.descripcion;
        let impuesto_producto:number =req.body.impuesto_producto;
        
        console.log(req.body);
        var query="UPDATE documento_detalle SET  documento_id=$1, producto_id= $2, fecha_registro=$3, cantidad=$4, estado=$5, parcial=$6, unitario=$7, impreso_comanda=$8,descripcion=$9, impuesto_producto=$11 WHERE documento_detalle_id = $10";
        await db.query(query, [documento_id,producto_id,fecha_registro,cantidad,estado,parcial,unitario,impreso_comanda,descripcion,documento_detalle_id,impuesto_producto]).then(res2=>{
            res.json({"code":200,"documento_detalle_id":documento_detalle_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"documento_id":documento_id,"error":error.error});
        });
    }
    
    public async getDocumentoDetalleByDocumento (req:Request, res:Response):Promise<any>{
        const documento_id = req.query.documento_id; 
        console.log(documento_id);
        const usuario = await  db.query(documentoDetalleRepository.getDocumentoDetalleByDocumento,[documento_id]);       
             res.json(usuario.rows);     
    }

    public async getDocumentoDetalleByDocumentoList (req:Request, res:Response):Promise<any>{
        const documento_id = <string>req.query.documento_id; 
        let query:string="select * from DOCUMENTO_DETALLE where  estado=1 and documento_id in ()";
        query=query.replace('()', "("+documento_id.toString()+")");
        console.log(query);
        const usuario = await  db.query(query);       
             res.json(usuario.rows);     
    }

    
  
}
export const documentoDetalleControllers = new DocumentoDetalleControllers();