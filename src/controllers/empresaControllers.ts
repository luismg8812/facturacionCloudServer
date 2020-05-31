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
    
    public async getEmpresaById (req:Request, res:Response):Promise<any>{
        const empresa_id = req.query.empresa_id; 
        console.log(empresa_id);
        const usuario = await  db.query(empresaRepository.getEmpresaById,[empresa_id]);       
             res.json(usuario.rows);     
    }

    
    public async updateConsecutivoEmpresa (req:Request, res:Response):Promise<any>{ 
        var consecutivo=req.body.consecutivo;
        var empresa_id=req.body.empresa_id;
        console.log(req.body);
        var query="UPDATE empresa SET  consecutivo=$1 WHERE empresa_id = $2";
        await db.query(query, [consecutivo,empresa_id ]).then(res2=>{
            res.json({"code":200,"empresa_id":empresa_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"empresa_id":empresa_id,"error":error.error});
        });
    }
}






export const empresaControllers = new EmpresaControllers();