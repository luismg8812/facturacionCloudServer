import {Request,Response} from 'express';
import { clienteRepository } from '../repository/clienteRepository';
import db  from '../database';


class ClienteControllers{
    public async getClientesByEmpresa(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const opcionUsuario = await  db.query(clienteRepository.getClientesByEmpresa,[empresaId]);       
             res.json(opcionUsuario.rows);  
    }

    public async getImpresorasEmpresa(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const impresoraEmpresa = await  db.query(clienteRepository.getImpresorasEmpresa,[empresaId]);       
             res.json(impresoraEmpresa.rows);  
    }

      
    public async saveCliente (req:Request, res:Response):Promise<any>{            
        let nombre=req.body.nombre;
        let apellidos=req.body.apellidos;
        let documento=req.body.documento;
        let barrio=req.body.barrio;
        let direccion=req.body.direccion;
        let celular=req.body.celular;
        let fijo=req.body.fijo;
        let fecha_registro=req.body.fecha_registro;
        let credito_activo=req.body.credito_activo;
        let mail=req.body.mail;
        let empresa_id=req.body.empresa_id;
        let tipo_identificacion_id=req.body.tipo_identificacion_id;
        let segundo_nombre=req.body.segundo_nombre;
        let segundo_apellido=req.body.segundo_apellido;
        let fact_tipo_empresa_id=req.body.fact_tipo_empresa_id;
    
        console.log(req.body);
        const id = await  db.query(clienteRepository.getIdCliente);
        const cliente_id = id.rows[0].nextval; 
        console.log(cliente_id);
        var query="INSERT INTO cliente(cliente_id,nombre, apellidos, documento, barrio,direccion, celular, fijo, fecha_registro, credito_activo,mail,empresa_id,tipo_identificacion_id,segundo_nombre,segundo_apellido,fact_tipo_empresa_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)";
        await db.query(query, [cliente_id,nombre, apellidos, documento, barrio,direccion, celular, fijo, fecha_registro, credito_activo,mail,empresa_id,tipo_identificacion_id,segundo_nombre,segundo_apellido,fact_tipo_empresa_id]).then(res2=>{
            res.json({"code":200,"cliente_id":cliente_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"cliente_id":cliente_id});
        });
    }  

    public async updateCliente(req: Request, res: Response): Promise<any> {
        let cliente_id=req.body.cliente_id;
        let nombre=req.body.nombre;
        let apellidos=req.body.apellidos;
        let documento=req.body.documento;
        let barrio=req.body.barrio;
        let direccion=req.body.direccion;
        let celular=req.body.celular;
        let fijo=req.body.fijo;
        let fecha_registro=req.body.fecha_registro;
        let credito_activo=req.body.credito_activo;
        let mail=req.body.mail;
        let empresa_id=req.body.empresa_id;
        let tipo_identificacion_id=req.body.tipo_identificacion_id;
        let segundo_nombre=req.body.segundo_nombre;
        let segundo_apellido=req.body.segundo_apellido;
        let fact_tipo_empresa_id=req.body.fact_tipo_empresa_id;
        console.log(req.body);
        var query = "UPDATE cliente SET  nombre=$1, apellidos= $2, documento=$3, barrio=$4, direccion=$5, celular=$6, fijo=$7, fecha_registro=$8,credito_activo=$9,mail=$10,empresa_id=$11,tipo_identificacion_id=$12,segundo_nombre=$13,segundo_apellido=$14, fact_tipo_empresa_id=$16  WHERE cliente_id = $15";
        console.log(query);
        await db.query(query, [nombre, apellidos, documento, barrio, direccion, celular, fijo, fecha_registro, credito_activo, mail, empresa_id, tipo_identificacion_id, segundo_nombre, segundo_apellido, cliente_id,fact_tipo_empresa_id]).then(res2 => {
            res.json({ "code": 200, "cliente_id": cliente_id });
        }).catch(error => {
            console.error(error);
            res.json({ "code": 400, "cliente_id": cliente_id, "error": error.error });
        });
    }

    public async getConfiguracionByEmpresa(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const configuracion = await  db.query(clienteRepository.getConfiguracionByEmpresa,[empresaId]);       
             res.json(configuracion.rows);  
    }

    public async getTipoPago(req:Request, res:Response):Promise<any>{  
        const tipoPago = await  db.query(clienteRepository.getTipoPago);              
        res.json(tipoPago.rows);  
    }

    

    public async getTipoIdentificacionAll(req:Request, res:Response):Promise<any>{  
        const tipoIdentificacion = await  db.query(clienteRepository.getTipoIdentificacionAll);              
        res.json(tipoIdentificacion.rows);  
    }

    public async getTipoEmpresa(req:Request, res:Response):Promise<any>{  
        const tipoIdentificacion = await  db.query(clienteRepository.getTipoEmpresa);              
        res.json(tipoIdentificacion.rows);  
    }

    

    
}
export const clienteControllers = new ClienteControllers();