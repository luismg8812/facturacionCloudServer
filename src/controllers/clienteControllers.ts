import {Request,Response} from 'express';
import { clienteRepository } from '../repository/clienteRepository';
import db  from '../database';

class ClienteControllers{
    
    public async getClientesByEmpresa(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const opcionUsuario = await  db.query(clienteRepository.getClientesByEmpresa,[empresaId]);       
             res.json(opcionUsuario.rows);  
    }

    public async getConfiguracionByEmpresa(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const configuracion = await  db.query(clienteRepository.getConfiguracionByEmpresa,[empresaId]);       
             res.json(configuracion.rows);  
    }

    
}
export const clienteControllers = new ClienteControllers();