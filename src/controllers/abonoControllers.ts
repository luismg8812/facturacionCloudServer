import {Request,Response} from 'express';
import { abonoRepository } from '../repository/abonoRepository';
import db  from '../database';


class AbonoControllers{
   
    public async saveAbono (req:Request, res:Response):Promise<any>{            
        let documento_id=req.body.documento_id;
        let tipo_pago_id=req.body.tipo_pago_id;
        let usuario_id=req.body.usuario_id;
        let cantidad=req.body.cantidad;
        let fecha_ingreso=req.body.fecha_ingreso;
        let cierre_diario=req.body.cierre_diario;
       
        console.log(req.body);
        const id = await  db.query(abonoRepository.getIdAbono);
        const abono_id = id.rows[0].nextval; 
        console.log(abono_id);
        var query="INSERT INTO abono(abono_id,documento_id, tipo_pago_id, usuario_id, cantidad,fecha_ingreso,cierre_diario) VALUES ($1,$2,$3,$4,$5,$6,$7)";
        await db.query(query, [abono_id,documento_id, tipo_pago_id, usuario_id, cantidad,fecha_ingreso,cierre_diario]).then(res2=>{
            res.json({"code":200,"abono_id":abono_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"abono_id":abono_id});
        });
    }    

    public async getAbonosByDocumento(req:Request, res:Response):Promise<any>{
        const documentoId = req.query.documentoId; 
        const abonos = await  db.query(abonoRepository.getAbonosByDocumento,[documentoId]);       
             res.json(abonos.rows);  
    }
    
}
export const abonoControllers = new AbonoControllers();