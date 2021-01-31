import { Request, Response } from 'express';
import db from '../database';
class InformeDiarioControllers {

    public async getClientesByEmpresa(req: Request, res: Response): Promise<any> {
        const empresaId = req.query.empresaId;
       
        console.log(req.query); 
        let query: string = "select sum(total) total_ventas, sum(total_costo) costo_ventas, sum(iva) iva_ventas, "
        +"sum(iva_5) iva_5, sum(iva_19) iva_19, sum(base_5) base_5, sum(base_19) base_19, sum(excento) excento, (sum(total)-sum(total_costo)) ganancias "
        +"from documento "
        +"where tipo_documento_id = 10 "
        +"and impreso=1 "
        +"and consecutivo_dian is not null "
        +"and empresa_id= "+empresaId
        +" and cierre_diario= 0 ";      
         console.log(query);
        const docuemntos = await db.query(query);
        res.json(docuemntos.rows);
    }


    public async getInfoDiarioByDate(req: Request, res: Response): Promise<any> {
        const empresaId = req.query.empresaId;
        const fechaInforme = req.query.fechaInforme;
        const fechaFin = req.query.fechaFin;
        
        console.log(req.query);
        let query: string = "select * from informe_diario where fecha_informe >= '"+fechaInforme+"' and  fecha_informe <= '"+fechaFin+"'"
        +"and empresa_id= "+empresaId
         console.log(query);
        const docuemntos = await db.query(query);
        res.json(docuemntos.rows);
    }

    public async hacerCierreDiario(req: Request, res: Response): Promise<any> {
        const empresaId = req.query.empresaId;
        console.log(req.query);
        let query: string = "update documento set impreso=1, cierre_diario=1 where tipo_documento_id in (10,9,5,4,8,12,13) and empresa_id="+empresaId;
        console.log(query);
        await db.query("update retiro_caja set cierre_diario=1 where cierre_diario=0;");
        await db.query(query).then(res2 => {
            res.json({ "code": 200, "empresaId": empresaId });
        }).catch(error => {
            console.error(error);
            res.json({ "code": 400, "empresaId": empresaId, "error": error.error });
        });
        

    }

    
}
export const informeDiarioControllers = new InformeDiarioControllers();