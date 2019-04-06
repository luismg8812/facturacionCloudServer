import {Request,Response} from 'express';
import { empresaRepository } from '../repository/empresaRepository';
import db  from '../database';

class EmpresaControllers{
    public async pagosEmpresaByEmpresa (req:Request, res:Response):Promise<any>{
        const empresa_id = req.query.empresa_id; 
        console.log(empresa_id);
        const usuario = await  db.query(empresaRepository.pagosEmpresaByEmpresa,[empresa_id]);       
             res.json(usuario.rows);     
    }
}
export const empresaControllers = new EmpresaControllers();