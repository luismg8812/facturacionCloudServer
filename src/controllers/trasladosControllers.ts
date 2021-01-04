import {Request,Response} from 'express';
import { abonoRepository } from '../repository/abonoRepository';
import db  from '../database';
import { documentoRepository } from '../repository/documentoRepository';
import { trasladosRepository } from '../repository/trasladosRepository';


class TrasladosControllers{
   
    public async saveRequerimiento (req:Request, res:Response):Promise<any>{            
        let empresa_id=req.body.empresa_id;
        let observacion=req.body.observacion;
        let usuario_id=req.body.usuario_id;
        let estado=req.body.estado;
        let total=req.body.total;
        const fecha =   await db.query(documentoRepository.getfechaNow);
        var fecha_registro = fecha.rows[0].fecha_registro;
        console.log(req.body);
        const id = await  db.query(trasladosRepository.getIdRequerimiento);
        const requerimiento_id = id.rows[0].nextval; 
        console.log(requerimiento_id);
        var query="INSERT INTO requerimiento(requerimiento_id,empresa_id, usuario_id, fecha_registro, estado,total,observacion) VALUES ($1,$2,$3,$4,$5,$6,$7)";
        await db.query(query, [requerimiento_id,empresa_id, usuario_id, fecha_registro, estado,total,observacion]).then(res2=>{
            res.json({"code":200,"requerimiento_id":requerimiento_id,"fecha_registro":fecha_registro});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"requerimiento_id":requerimiento_id});
        });
    }

    public async updateRequerimiento (req:Request, res:Response):Promise<any>{            
        let empresa_id=req.body.empresa_id;
        let observacion=req.body.observacion;
        let usuario_id=req.body.usuario_id;
        let estado=req.body.estado;
        let total=req.body.total;
        const requerimiento_id = req.body.requerimiento_id;
        console.log(req.body);
        var query="UPDATE requerimiento SET empresa_id=$1, usuario_id=$2, estado=$3,total=$4,observacion=$5 WHERE requerimiento_id = $6";
        await db.query(query, [empresa_id, usuario_id, estado,total,observacion,requerimiento_id]).then(res2=>{
            res.json({"code":200,"requerimiento_id":requerimiento_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"requerimiento_id":requerimiento_id});
        });
    }

    
    
    public async saveRequerimientoDetalle (req:Request, res:Response):Promise<any>{            
        let requerimiento_id=req.body.requerimiento_id;
        let producto_id=req.body.producto_id;
        let cantidad=req.body.cantidad;
        let estado=req.body.estado;
        let parcial=req.body.parcial;
        let unitario=req.body.unitario;
        let descripcion=req.body.descripcion;
        const fecha =   await db.query(documentoRepository.getfechaNow);
        var fecha_registro = fecha.rows[0].fecha_registro;
        console.log(req.body);
        const id = await  db.query(trasladosRepository.getIdRequerimientoDetalle);
        const requerimiento_detalle_id = id.rows[0].nextval; 
        console.log(requerimiento_detalle_id);
        var query="INSERT INTO requerimiento_detalle(requerimiento_detalle_id,requerimiento_id, cantidad, estado, parcial,unitario,descripcion,fecha_registro,producto_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)";
        await db.query(query, [requerimiento_detalle_id,requerimiento_id, cantidad, estado, parcial,unitario,descripcion,fecha_registro,producto_id]).then(res2=>{
            res.json({"code":200,"requerimiento_detalle_id":requerimiento_detalle_id,"fecha_registro":fecha_registro});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"requerimiento_detalle_id":requerimiento_detalle_id});
        });
    }

    public async getRequerimientoDetalleByRequerimientoId(req: Request, res: Response): Promise<any> {
        const requerimientoId = req.query.requerimientoId;
        let query: string = "select * from requerimiento_detalle where requerimiento_id = "+requerimientoId;
        query = query + "  order by requerimiento_detalle_id desc";
        console.log(query);
        const docuemntos = await db.query(query);
        res.json(docuemntos.rows);
    }

    public async deleteRequerimientoDetalle(req: Request, res: Response): Promise<any> {
        var requerimientoId = req.body.requerimiento_id;
        console.log(req.body);
        const usuario = await db.query(trasladosRepository.deleteRequerimientoDetalle, [requerimientoId]);
        res.json({ "code": 200, "usuario_id": requerimientoId });
    }

    
    public async getRequerimientos(req: Request, res: Response): Promise<any> {
        const empresaId = req.query.empresaId;
        const fechaIni = req.query.fechaIni;
        const fechaFin = req.query.fechaFin;
        let query: string = "select * from requerimiento where 1= 1 ";
        if (empresaId != "") {
            query = query + " and empresa_id= " + empresaId;
        }
        if (fechaIni != '') {
            query = query + " and fecha_registro>= '" + fechaIni + "'";
        }
        if (fechaFin != '') {
            query = query + " and fecha_registro <= '" + fechaFin + "'";
        }
        query = query + "  order by fecha_registro desc";
        console.log(query);
        const docuemntos = await db.query(query);
        res.json(docuemntos.rows);
    }
    
}
export const trasladosControllers = new TrasladosControllers();