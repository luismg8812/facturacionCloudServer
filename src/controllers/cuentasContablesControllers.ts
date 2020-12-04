import { Request, Response } from 'express';
import { abonoRepository } from '../repository/abonoRepository';
import db from '../database';
import { cuentasContablesRepository } from '../repository/cuentasContablesRepository';


class CuentasContablesControllers {

    public async saveAbono(req: Request, res: Response): Promise<any> {
        let documento_id = req.body.documento_id;
        let tipo_pago_id = req.body.tipo_pago_id;
        let usuario_id = req.body.usuario_id;
        let cantidad = req.body.cantidad;
        let fecha_ingreso = req.body.fecha_ingreso;

        console.log(req.body);
        const id = await db.query(abonoRepository.getIdAbono);
        const abono_id = id.rows[0].nextval;
        console.log(abono_id);
        var query = "INSERT INTO abono(abono_id,documento_id, tipo_pago_id, usuario_id, cantidad,fecha_ingreso) VALUES ($1,$2,$3,$4,$5,$6)";
        await db.query(query, [abono_id, documento_id, tipo_pago_id, usuario_id, cantidad, fecha_ingreso]).then(res2 => {
            res.json({ "code": 200, "abono_id": abono_id });
        }).catch(error => {
            console.error(error);
            res.json({ "code": 400, "abono_id": abono_id });
        });
    }

    public async getClasesContables(req: Request, res: Response): Promise<any> {
        const empresaId = req.query.empresaId;
        const abonos = await db.query(cuentasContablesRepository.getClasesContables, [empresaId]);
        res.json(abonos.rows);
    }

    public async getGrupoByClase(req: Request, res: Response): Promise<any> {
        const claseId = req.query.claseId;
        console.log(req.query)
        const abonos = await db.query(cuentasContablesRepository.getGrupoByClase, [claseId]);
        res.json(abonos.rows);
    }

    public async getCuentaByGrupo(req: Request, res: Response): Promise<any> {
        const grupoId = req.query.grupoId;
        console.log(req.query)
        const abonos = await db.query(cuentasContablesRepository.getCuentaByGrupo, [grupoId]);
        res.json(abonos.rows);
    }

    public async getSubCuentaByCuenta(req: Request, res: Response): Promise<any> {
        const cuentaId = req.query.cuentaId;
        console.log(req.query)
        const abonos = await db.query(cuentasContablesRepository.getSubCuentaByCuenta, [cuentaId]);
        res.json(abonos.rows);
    }

    public async getAuxiliarBySubCuenta(req: Request, res: Response): Promise<any> {
        const subCuentaId = req.query.subCuentaId;
        console.log(req.query)
        const abonos = await db.query(cuentasContablesRepository.getAuxiliarBySubCuenta, [subCuentaId]);
        res.json(abonos.rows);
    }




}
export const cuentasContablesControllers = new CuentasContablesControllers();