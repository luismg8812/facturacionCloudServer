import {Request,Response} from 'express';
import db  from '../database';
import { documentoDetalleRepository } from '../repository/documentoDetalleRepository';

class DocumentoDetalleControllers{

    public async createDocumentoDetalle (req:Request, res:Response):Promise<any>{     
        
        let documento_id:number =req.body.documento_id;
        let producto_id:number =req.body.producto_id;
       const fecha =   await db.query(documentoDetalleRepository.getfechaNow);
       var fecha_registro = fecha.rows[0].fecha_registro;
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
            console.error("error creando documento detalle");
            console.log(error);
            res.json({"code":400,"documento_detalle_id":documento_detalle_id,"error":error.error});
        });      
    }

    public async updateDocumentoDetalle (req:Request, res:Response):Promise<any>{ 
        
        let documento_detalle_id:number =req.body.documento_detalle_id;
        let documento_id:number =req.body.documento_id;
        let producto_id:number =req.body.producto_id;
        const id =   await db.query(documentoDetalleRepository.getFechaRegistro,[documento_detalle_id]);
        var fecha_registro = id.rows[0].fecha_registro;
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
            console.error("error actualizando documento detalle");
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

    public async getDocumentosByFechaAndTipo (req:Request, res:Response):Promise<any>{
        const fechaInicial = req.query.fechaInicial;
        const fechaFinal = req.query.fechaFinal;
        let empleadoId = req.query.idEmpleados;
        let empresaId = req.query.empresaId;
        let usuarioId = req.query.usuarioId;
        console.log(req.query);
        let query:string=`select dd.documento_detalle_id, dd.fecha_registro,pp.nombre, COALESCE(pp.porcentaje_venta,0) porcentaje_venta, d.consecutivo_dian, 
        dd.cantidad, dd.unitario, d.empleado_id vendedor, dd.parcial, dd.parcial*(COALESCE(pp.porcentaje_venta,0)/100) gana
        from documento_detalle dd, producto pp, documento d
        where dd.producto_id = pp.producto_id
        and dd.documento_id = d.documento_id
        and d.impreso=1
        and d.tipo_documento_id=10
        and d.empresa_id= ${empresaId}
        and dd.estado=1`;
        if (fechaInicial != '') {
            query = query + " and dd.fecha_registro>= '" + fechaInicial + "'";
        }
        if (fechaFinal != '') {
            query = query + " and dd.fecha_registro <= '" + fechaFinal + "'";

        }
        if (usuarioId != '') {
            query = query + " and d.usuario_id = " + usuarioId;
        }
        if (empleadoId != '') {
            query = query + " and d.empleado_id =  " + empleadoId;
        }
        query = query + " order by dd.documento_detalle_id desc";
        console.log(query);
        const usuario = await  db.query(query);       
             res.json(usuario.rows);     
    }
    
  
}
export const documentoDetalleControllers = new DocumentoDetalleControllers();