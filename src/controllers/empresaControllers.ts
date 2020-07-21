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
        var resolucion_empresa_id=req.body.resolucion_empresa_id;
        console.log(req.body);
        var query="UPDATE RESOLUCION_EMPRESA SET  consecutivo=$1 WHERE resolucion_empresa_id = $2";
        await db.query(query, [consecutivo,resolucion_empresa_id ]).then(res2=>{
            res.json({"code":200,"resolucion_empresa_id":resolucion_empresa_id});
        }).catch(error=>{
            console.error(res);
            res.json({"code":400,"resolucion_empresa_id":resolucion_empresa_id,"error":error});
        });
    }
}






export const empresaControllers = new EmpresaControllers();