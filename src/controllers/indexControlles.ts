import {Request,Response} from 'express';
import db  from '../database';
import db_license  from '../database_license';


class IndexControllers{
    public  async index (req:Request, res:Response){
        const tipoIdentificacion = await  db.query("select * from tipo_identificacion order by tipo_identificacion_id");              
        res.json(tipoIdentificacion.rows);
    }

    async validarLisencia(req:Request, res:Response){
        const empresa = await db.query("select * from empresa where empresa_id =1");  
        const resolucion = await db.query("select * from resolucion_empresa where empresa_id =1 and resolucion_empresa_id =1");  
        console.log(empresa.rows[0]);
        console.log(resolucion.rows[0]);
        if(empresa.rows[0].identificador==undefined || empresa.rows[0].identificador==null){     
            console.log("bloq empresa por identificador");
            await db.query("UPDATE configuracion set server=0 ");
            await db.query("UPDATE empresa set estado_empresa_id=2 ");
            return;
        }       
        try {
            let bloq=0;
            let empr= empresa.rows[0];
            let reso=resolucion.rows[0];
            /*const estado_empresa =await db_license.query("select * from estado_empresa where identificador = "+ empresa.rows[0].identificador );        
            console.log(estado_empresa.rows);
            let es=estado_empresa.rows[0];
            if(es.activar==0){
                if(es.nombre!=empr.nombre){
                    console.log("bloq by name");
                    bloq=1;
                }
                if(es.representante!=empr.representante){
                    console.log("bloq by representante");
                    bloq=1;
                }
                if(es.nit!=empr.nit){
                    console.log("bloq by nit");
                    bloq=1;
                }
                if(es.regimen!=empr.regimen){
                    console.log("bloq by regimen");
                    bloq=1;
                }
                if(es.direccion!=empr.direccion){
                    console.log("bloq by direccion");
                    bloq=1;
                }
                if(es.resolucion_dian!=reso.resolucion_dian){
                    console.log("bloq by resolucion_dian");
                    bloq=1;
                }
                if(es.letra_consecutivo!=reso.letra_consecutivo){
                    console.log("bloq by letra_consecutivo");
                    bloq=1;
                }
                if(es.autorizacion_hasta!=reso.autorizacion_hasta){
                    console.log("bloq by autorizacion_hasta");
                    bloq=1;
                }
                if(es.estado!=1){
                    console.log("bloq by estado");
                    bloq=1;
                }
                if(bloq==1){
                    console.log("bloq empresa");
                    await db.query("UPDATE configuracion set server=0 ");
                    await db.query("UPDATE empresa set estado_empresa_id=2 ");
                }else{
                    console.log("bloq empresa");
                    await db.query("UPDATE configuracion set server=1 ");
                    await db.query("UPDATE empresa set estado_empresa_id=1 ");
                }
            }else{
                await db.query("UPDATE configuracion set server=1 ");
                await db.query("UPDATE empresa set estado_empresa_id=1 ");
            }*/
            
        } catch (error) {
            console.error("error conexion lisencia");      
        }
        const respu = await db.query("select * from empresa where empresa_id =1");  
        res.json(respu.rows);
    }

} 


export const indexControllers = new IndexControllers();