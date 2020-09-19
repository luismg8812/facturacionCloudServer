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

    public async saveInformeDiario(req: Request, res: Response): Promise<any> {
        
        let empresa_id:number=req.body.empresa_id;
        let total_ventas:number=req.body.total_ventas;
        let total_remisiones:number=req.body.total_remisiones;
        let iva_ventas:number=req.body.iva_ventas;
        let iva_remisiones:number=req.body.iva_remisiones;
        let fecha_ingreso:Date=req.body.fecha_ingreso;
        let fecha_informe:Date=req.body.fecha_informe;
        let costo_ventas:number=req.body.costo_ventas;
        let costo_remisiones:number=req.body.costo_remisiones;
        let cantidad_documentos:number=req.body.cantidad_documentos;
        let documento_inicio:string=req.body.documento_inicio;
        let documento_fin:string=req.body.documento_fin;
        let iva_5:number=req.body.iva_5;
        let iva_19:number=req.body.iva_19;
        let base_5:number=req.body.base_5;
        let base_19:number=req.body.base_19;
        let excento:number=req.body.excento;
        let iva_5_compras:number=req.body.iva_5_compras;
        let Iva_19_compras:number=req.body.Iva_19_compras;
        let base_19_compras:number=req.body.base_19_compras;
        let base_5_compras:number=req.body.base_5_compras;
        let excento_compras:number=req.body.excento_compras;
        let cierre_diario:number=req.body.cierre_diario;
        console.log(req.body);
        const id = await db.query("select nextval('s_informe_diario')");
        const informe_diario_id = id.rows[0].nextval;
        console.log(informe_diario_id);
        var query = "INSERT INTO informe_diario(informe_diario_id,empresa_id, total_ventas, total_remisiones, iva_ventas, iva_remisiones, fecha_ingreso, fecha_informe, costo_ventas,costo_remisiones,cantidad_documentos,documento_inicio,documento_fin,iva_5,iva_19,base_5,base_19,excento,iva_5_compras,Iva_19_compras, base_19_compras,base_5_compras,excento_compras,cierre_diario) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24 )";
        await db.query(query, [informe_diario_id,empresa_id, total_ventas, total_remisiones, iva_ventas, iva_remisiones, fecha_ingreso, fecha_informe, costo_ventas,costo_remisiones,cantidad_documentos,documento_inicio,documento_fin,iva_5,iva_19,base_5,base_19,excento,iva_5_compras,Iva_19_compras, base_19_compras,base_5_compras,excento_compras,cierre_diario]).then(res2 => {
            res.json({ "code": 200, "informe_diario_id": informe_diario_id });
        }).catch(error => {
            console.error(error);
            res.json({ "code": 400, "informe_diario_id": informe_diario_id });
        });
    }

    public async updateInformeDiario(req: Request, res: Response): Promise<any> {
        let informe_diario_id: number = req.body.informe_diario_id;
        let empresa_id:number=req.body.empresa_id;
        let total_ventas:number=req.body.total_ventas;
        let total_remisiones:number=req.body.total_remisiones;
        let iva_ventas:number=req.body.iva_ventas;
        let iva_remisiones:number=req.body.iva_remisiones;
        let fecha_ingreso:Date=req.body.fecha_ingreso;
        let fecha_informe:Date=req.body.fecha_informe;
        let costo_ventas:number=req.body.costo_ventas;
        let costo_remisiones:number=req.body.costo_remisiones;
        let cantidad_documentos:number=req.body.cantidad_documentos;
        let documento_inicio:string=req.body.documento_inicio;
        let documento_fin:string=req.body.documento_fin;
        let iva_5:number=req.body.iva_5;
        let iva_19:number=req.body.iva_19;
        let base_5:number=req.body.base_5;
        let base_19:number=req.body.base_19;
        let excento:number=req.body.excento;
        let iva_5_compras:number=req.body.iva_5_compras;
        let Iva_19_compras:number=req.body.Iva_19_compras;
        let base_19_compras:number=req.body.base_19_compras;
        let base_5_compras:number=req.body.base_5_compras;
        let excento_compras:number=req.body.excento_compras;
        let cierre_diario:number=req.body.cierre_diario;

        console.log(req.body);
        var query = "UPDATE informe_diario SET  cierre_diario=$1, empresa_id=$2, total_ventas=$3, total_remisiones=$4, iva_ventas=$5, iva_remisiones=$6, fecha_ingreso=$7, fecha_informe=$8, costo_ventas=$9,costo_remisiones=$10,cantidad_documentos=$11,documento_inicio=$12,documento_fin=$13,iva_5=$14,iva_19=$15,base_5=$16,base_19=$17,excento=$18,iva_5_compras=$19,Iva_19_compras=$20, base_19_compras=$21,base_5_compras=$22,excento_compras=$23 WHERE informe_diario_id = $24";
        console.log(query);
        await db.query(query, [cierre_diario,empresa_id, total_ventas, total_remisiones, iva_ventas, iva_remisiones, fecha_ingreso, fecha_informe, costo_ventas,costo_remisiones,cantidad_documentos,documento_inicio,documento_fin,iva_5,iva_19,base_5,base_19,excento,iva_5_compras,Iva_19_compras, base_19_compras,base_5_compras,excento_compras,informe_diario_id]).then(res2 => {
            res.json({ "code": 200, "informe_diario_id": informe_diario_id });
        }).catch(error => {
            console.error(error);
            res.json({ "code": 400, "informe_diario_id": informe_diario_id, "error": error.error });
        });
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