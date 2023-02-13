import { Request, Response } from 'express';
import { bonoRepository } from '../repository/bonoRepository';
import db from '../database';
import { documentoRepository } from '../repository/documentoRepository';


class BonoControllers {

    public async saveBono(req: Request, res: Response): Promise<any> {
        let vehiculo_id = req.body.vehiculo_id;
        let documento_id = req.body.documento_id;
        let usuario_id = req.body.usuario_id;
        let empresa_id = req.body.empresa_id;
        let tipo_bono_id = req.body.tipo_bono_id;
        let observacion = req.body.observacion;
        let total = req.body.total;
        let estado = req.body.estado;
        const fecha =   await db.query(documentoRepository.getfechaNow);
        var fecha_registro = fecha.rows[0].fecha_registro;
        
        console.log(req.body);
        const id = await db.query(bonoRepository.getIdBono);
        const bono_id = id.rows[0].nextval;
        console.log(bono_id);
        var query = "INSERT INTO bono(bono_id, vehiculo_id, documento_id, usuario_id, empresa_id, tipo_bono_id,observacion,total,estado,fecha_registro) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";
        await db.query(query, [bono_id, vehiculo_id, documento_id, usuario_id, empresa_id, tipo_bono_id,observacion,total,estado,fecha_registro]).then(res2 => {
            res.json({ "code": 200, "bono_id": bono_id });
        }).catch(error => {
            console.error(error);
            res.json({ "code": 400, "bono_id": bono_id });
        });
    }

    public async updateBono(req: Request, res: Response): Promise<any> {
        let estado=req.body.estado;
        let bono_id=req.body.bono_id;
        const fecha =   await db.query(documentoRepository.getfechaNow);
        var fecha_uso = fecha.rows[0].fecha_registro;
        console.log(req.body);
        var query = "UPDATE bono SET  estado=$2, fecha_uso =$3 WHERE bono_id = $1";
        console.log(query);
        await db.query(query, [bono_id, estado,fecha_uso]).then(res2 => {
            res.json({ "code": 200, "bono_id": bono_id });
        }).catch(error => {
            console.error(error);
            res.json({ "code": 400, "bono_id": bono_id, "error": error.error });
        });
    }

    
    public async getTiposBono(req: Request, res: Response): Promise<any> {
        console.log(req.query);
       
        const abonos = await db.query(bonoRepository.getTiposBono);
        res.json(abonos.rows);
    }

    public async getBonoById(req: Request, res: Response): Promise<any> {
        console.log(req.query);
        const bonoId = req.query.bonoId;
        const abonos = await db.query(bonoRepository.getBonoById,[bonoId]);
        res.json(abonos.rows);
    }

    

    public async getBonosByEmpresa(req: Request, res: Response): Promise<any> {
        const placa = req.query.placa;
        const clienteId = req.query.clienteId;
        const bonoId = req.query.bonoId;
        const estado = req.query.estado;
        const fechaIni = req.query.fechaIni;
        const fechaFin = req.query.fechaFin;
        const empresaId = req.query.empresaId;
        const documentoId = req.query.documentoId;
        console.log(req.query);
        let query = "select placa, bono_id, estado,fecha_registro,fecha_uso, total,observacion from bono, vehiculo where bono.vehiculo_id= vehiculo.vehiculo_id and  empresa_id = "+empresaId;
        if(placa!=""){
            query = query + " and LOWER(placa) like LOWER('%" + placa + "%')";
        }
        if(bonoId!=""){
            query = query + " and bono_id=" + bonoId;
        }
        if(estado!=""){
            query = query + " and estado= " + "'"+estado+"'"
        }
        if(clienteId!=""){
            query = query + " and cliente_id=" + clienteId
        }
        if(documentoId!=""){
            query = query + " and documento_id=" + documentoId
        }
        if (fechaIni != '') {
            query = query + " and fecha_registro>= '" + fechaIni + "'";
        }
        if (fechaFin != '') {
            query = query + " and fecha_registro <= '" + fechaFin + "'";
        }
        query = query + " order by bono_id desc";
        console.log(query);
        const abonos = await db.query(query);
        res.json(abonos.rows);
    }

}
export const bonoControllers = new BonoControllers();