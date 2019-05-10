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