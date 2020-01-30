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

        console.log(req.body);
        const id = await  db.query(clienteRepository.getIdCliente);
        const cliente_id = id.rows[0].nextval; 
        console.log(cliente_id);
        var query="INSERT INTO cliente(cliente_id,nombre, apellidos, documento, barrio,direccion, celular, fijo, fecha_registro, credito_activo,mail,empresa_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)";
        await db.query(query, [cliente_id,nombre, apellidos, documento, barrio,direccion, celular, fijo, fecha_registro, credito_activo,mail,empresa_id]).then(res2=>{
            res.json({"code":200,"cliente_id":cliente_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"cliente_id":cliente_id});
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

    
}
export const clienteControllers = new ClienteControllers();