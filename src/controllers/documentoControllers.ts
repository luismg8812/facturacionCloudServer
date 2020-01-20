import {Request,Response} from 'express';
import { clienteRepository } from '../repository/clienteRepository';
import db  from '../database';
import { documentoRepository } from '../repository/documentoRepository';
import { CuadreCajaVoModel } from '../models/cuadreCajaVo.model';

class DocumentoControllers{

    public async createDocumento (req:Request, res:Response):Promise<any>{            
        let tipo_documento_id:number =req.body.tipo_documento_id;
        var empresa_id:number =req.body.empresa_id;
        var proveedor_id:number=req.body.proveedor_id;
        var usuario_id:number=req.body.usuario_id;
        var cliente_id:number=req.body.cliente_id;
        var empleado_id:number=req.body.empleado_id;
        var fecha_registro =req.body.fecha_registro;
        var fecha_entrega =req.body.fecha_entrega;
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
        var descripcion_cliente=req.body.descripcion_cliente;
        var descripcion_trabajador=req.body.descripcion_trabajador;
        console.log(req.body);
        const id = await  db.query(documentoRepository.getIdDocumento);
        const documento_id = id.rows[0].nextval; 
        console.log(documento_id);
        var query="INSERT INTO documento(documento_id,tipo_documento_id, empresa_id, proveedor_id, usuario_id, cliente_id, empleado_id, fecha_registro, consecutivo_dian,impreso,total,excento,gravado,iva,cierre_diario,detalle_entrada,mac,saldo,peso_total,descuento, cambio,iva_5,iva_19,base_5,base_19,retefuente,interes,total_costo,letra_consecutivo,invoice,anulado, fecha_entrega, descripcion_cliente, descripcion_trabajador) VALUES ($31,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$32,$33,$34 )";
        await db.query(query, [tipo_documento_id, empresa_id, proveedor_id, usuario_id, cliente_id, empleado_id, fecha_registro, consecutivo_dian,impreso,total,excento,gravado,iva,cierre_diario,detalle_entrada,mac,saldo,peso_total,descuento, cambio,iva_5,iva_19,base_5,base_19,retefuente,interes,total_costo,letra_consecutivo,invoice,anulado,documento_id,fecha_entrega,descripcion_cliente,descripcion_trabajador]).then(res2=>{
            res.json({"code":200,"documento_id":documento_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"documento_id":documento_id});
        });
    }

    public async createTipoPagoDocumento (req:Request, res:Response):Promise<any>{            
        var tipo_pago_id:number =req.body.tipo_pago_id;
        var documento_id:number=req.body.documento_id;
        var fecha_registro:number=req.body.fecha_registro;
        var valor:number=req.body.valor;   
        console.log(req.body);    
        var query="INSERT INTO tipo_pago_documento(documento_id,tipo_pago_id, fecha_registro, valor) VALUES ($1,$2,$3,$4)";
        await db.query(query, [documento_id, tipo_pago_id, fecha_registro, valor]).then(res2=>{
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
        var descripcion_cliente=req.body.descripcion_cliente;
        var descripcion_trabajador=req.body.descripcion_trabajador;
        var fecha_entrega =req.body.fecha_entrega;
        console.log(req.body);
        var query="UPDATE documento SET  tipo_documento_id=$1, empresa_id= $2, proveedor_id=$3, usuario_id=$4, cliente_id=$5, empleado_id=$6, fecha_registro=$7, consecutivo_dian=$8,impreso=$9,total=$10,excento=$11,gravado=$12,iva=$13,cierre_diario=$14,detalle_entrada=$15,mac=$16,saldo=$17,peso_total=$18,descuento=$19, cambio=$20,iva_5=$21,iva_19=$22,base_5=$23,base_19=$24,retefuente=$25,interes=$26,total_costo=$27,letra_consecutivo=$28,invoice=$29,anulado=$30 ,  fecha_entrega=$32, descripcion_cliente=$33, descripcion_trabajador=$34 WHERE documento_id = $31";
        await db.query(query, [tipo_documento_id, empresa_id, proveedor_id, usuario_id, cliente_id, empleado_id, fecha_registro, consecutivo_dian,impreso,total,excento,gravado,iva,cierre_diario,detalle_entrada,mac,saldo,peso_total,descuento, cambio,iva_5,iva_19,base_5,base_19,retefuente,interes,total_costo,letra_consecutivo,invoice,anulado,documento_id,fecha_entrega,descripcion_cliente,descripcion_trabajador]).then(res2=>{
            res.json({"code":200,"documento_id":documento_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"documento_id":documento_id,"error":error.error});
        });
    }
    
    public async getDocumentoByTipo(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const usuarioId = req.query.usuarioId; 
        let tipoDocumentoId:string[]=req.query.tipoDocumentoId.split(",");
        console.log(tipoDocumentoId); 
        let query:string ="select * from documento where empresa_id= $1 and usuario_id= $2 and tipo_documento_id in ()";
        query=query.replace('()', "("+tipoDocumentoId.toString()+")");
        const docuemntos = await  db.query(query,[empresaId,usuarioId ]);       
             res.json(docuemntos.rows);  
    }

    public async getCuadreCaja(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const usuarioId = req.query.usuarioId; 
        const cerrado = req.query.cerrado; 
        let cuadreCajaVoModel:CuadreCajaVoModel=new CuadreCajaVoModel();
        let tipoDocumentoId:string[]=req.query.tipoDocumentoId.split(",");
        console.log(tipoDocumentoId); 
                                
        let queryTotalFacturas ="select sum(total) totalFacturas from documento where empresa_id= $1 and usuario_id= $2 and tipo_documento_id in ();";
        let queryDocumentosNoImpresos ="select count(*) documentosNoImpresos from documento where empresa_id= $1 and usuario_id= $2 and tipo_documento_id in () and impreso=0;";
        
        queryTotalFacturas=queryTotalFacturas.replace('()', "("+tipoDocumentoId.toString()+")");
        queryDocumentosNoImpresos=queryDocumentosNoImpresos.replace('()', "("+tipoDocumentoId.toString()+")");
        let totalFacturas = await  db.query(queryTotalFacturas,[empresaId,usuarioId ]);  
        console.log(totalFacturas);     
        let documentosNoImpresos = await  db.query(queryDocumentosNoImpresos,[empresaId,usuarioId ]);       
        cuadreCajaVoModel.totalFacturas=totalFacturas.rows[0].totalfacturas;
        cuadreCajaVoModel.documentosNoImpresos=documentosNoImpresos.rows[0].documentosnoimpresos;
        
        res.json(cuadreCajaVoModel);  
    }
    
}
export const documentoControllers = new DocumentoControllers();