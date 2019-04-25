import {Request,Response} from 'express';
import { clienteRepository } from '../repository/clienteRepository';
import db  from '../database';
import { documentoRepository } from '../repository/documentoRepository';

class DocumentoControllers{

    public async createDocumento (req:Request, res:Response):Promise<any>{            
        let tipo_documento_id:number =req.body.tipo_documento_id;
        var empresa_id:number =req.body.empresa_id;
        var proveedor_id:number=req.body.proveedor_id;
        var usuario_id:number=req.body.usuario_id;
        var cliente_id:number=req.body.cliente_id;
        var empleado_id:number=req.body.empleado_id;
        var fecha_registro =req.body.fecha_registro;
        var consecutivo_dian=req.body.consecutivo_dian;
        var impreso=req.body.impreso;
        var total=req.body.total;
        var excento=req.body.excento;
        var gravado=req.body.gravado;
        var iva=req.body.impuesto;
        var cierre_diario=req.body.cierre_diario;
        var detalle_entrada=req.body.detalle_entrada;
        var mac=req.body.mac;
        var saldo=req.body.saldo;
        var peso_total=req.body.peso_total;
        var descuento=req.body.descuento;
        var cambio=req.body.cambio;
        var iva_5=req.body.iva_5;
        var iva_19=req.body.iva_19;
        var base_5=req.body.base_5;
        var base_19=req.body.base_19;
        var retefuente=req.body.retefuente;
        var interes=req.body.interes;
        var total_costo=req.body.total_costo;
        var letra_consecutivo = req.body.letra_consecutivo;
        var invoice=req.body.invoice;
        var anulado=req.body.anulado;
        console.log(req.body);
        const id = await  db.query(documentoRepository.getIdDocumento);
        const documento_id = id.rows[0].nextval; 
        console.log(documento_id);
        var query="INSERT INTO documento(documento_id,tipo_documento_id, empresa_id, proveedor_id, usuario_id, cliente_id, empleado_id, fecha_registro, consecutivo_dian,impreso,total,excento,gravado,iva,cierre_diario,detalle_entrada,mac,saldo,peso_total,descuento, cambio,iva_5,iva_19,base_5,base_19,retefuente,interes,total_costo,letra_consecutivo,invoice,anulado) VALUES ($31,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30 )";
        await db.query(query, [tipo_documento_id, empresa_id, proveedor_id, usuario_id, cliente_id, empleado_id, fecha_registro, consecutivo_dian,impreso,total,excento,gravado,iva,cierre_diario,detalle_entrada,mac,saldo,peso_total,descuento, cambio,iva_5,iva_19,base_5,base_19,retefuente,interes,total_costo,letra_consecutivo,invoice,anulado,documento_id]).then(res2=>{
            res.json({"code":200,"documento_id":documento_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"documento_id":documento_id});
        });
    }

    public async updateDocumento (req:Request, res:Response):Promise<any>{ 
        let documento_id:number =req.body.documento_id;           
        let tipo_documento_id:number =req.body.tipo_documento_id;
        var empresa_id:number =req.body.empresa_id;
        var proveedor_id:number=req.body.proveedor_id;
        var usuario_id:number=req.body.usuario_id;
        var cliente_id:number=req.body.cliente_id;
        var empleado_id:number=req.body.empleado_id;
        var fecha_registro =req.body.fecha_registro;
        var consecutivo_dian=req.body.consecutivo_dian;
        var impreso=req.body.impreso;
        var total=req.body.total;
        var excento=req.body.excento;
        var gravado=req.body.gravado;
        var iva=req.body.impuesto;
        var cierre_diario=req.body.cierre_diario;
        var detalle_entrada=req.body.detalle_entrada;
        var mac=req.body.mac;
        var saldo=req.body.saldo;
        var peso_total=req.body.peso_total;
        var descuento=req.body.descuento;
        var cambio=req.body.cambio;
        var iva_5=req.body.iva_5;
        var iva_19=req.body.iva_19;
        var base_5=req.body.base_5;
        var base_19=req.body.base_19;
        var retefuente=req.body.retefuente;
        var interes=req.body.interes;
        var total_costo=req.body.total_costo;
        var letra_consecutivo = req.body.letra_consecutivo;
        var invoice=req.body.invoice;
        var anulado=req.body.anulado;
        console.log(req.body);
        var query="UPDATE documento SET  tipo_documento_id=$1, empresa_id= $2, proveedor_id=$3, usuario_id=$4, cliente_id=$5, empleado_id=$6, fecha_registro=$7, consecutivo_dian=$8,impreso=$9,total=$10,excento=$11,gravado=$12,iva=$13,cierre_diario=$14,detalle_entrada=$15,mac=$16,saldo=$17,peso_total=$18,descuento=$19, cambio=$20,iva_5=$21,iva_19=$22,base_5=$23,base_19=$24,retefuente=$25,interes=$26,total_costo=$27,letra_consecutivo=$28,invoice=$29,anulado=$30 WHERE documento_id = $31";
        await db.query(query, [tipo_documento_id, empresa_id, proveedor_id, usuario_id, cliente_id, empleado_id, fecha_registro, consecutivo_dian,impreso,total,excento,gravado,iva,cierre_diario,detalle_entrada,mac,saldo,peso_total,descuento, cambio,iva_5,iva_19,base_5,base_19,retefuente,interes,total_costo,letra_consecutivo,invoice,anulado,documento_id]).then(res2=>{
            res.json({"code":200,"documento_id":documento_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"documento_id":documento_id,"error":error.error});
        });
    }
    
  
}
export const documentoControllers = new DocumentoControllers();