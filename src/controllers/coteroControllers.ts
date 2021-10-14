import {Request,Response} from 'express';
import { coteroRepository } from '../repository/coteroRepository';
import db  from '../database';


class CoteroControllers{
   
    public async saveCotero (req:Request, res:Response):Promise<any>{            
       
        let nombre=req.body.nombre;
        let peso=req.body.peso;
        let estado=req.body.estado;
       
        console.log(req.body);
        const id = await  db.query(coteroRepository.getIdCotero);
        const cotero_id = id.rows[0].nextval; 
        console.log(cotero_id);
        var query="INSERT INTO cotero(cotero_id,nombre, peso, estado) VALUES ($1,$2,$3,$4)";
        await db.query(query, [cotero_id,nombre, peso, estado]).then(res2=>{
            res.json({"code":200,"cotero_id":cotero_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"cotero_id":cotero_id});
        });
    }    

    public async updateCotero (req:Request, res:Response):Promise<any>{ 
        
        let nombre=req.body.nombre;
        let peso=req.body.peso;
        let estado=req.body.estado;
        let cotero_id:number =req.body.cotero_id;
        console.log(req.body);
        var query="UPDATE cotero SET  nombre=$1, peso= $2, estado=$3 WHERE cotero_id = $4";
        await db.query(query, [nombre,peso,estado,cotero_id]).then(res2=>{
            res.json({"code":200,"cotero_id":cotero_id});
        }).catch(error=>{
            console.error("error actualizando documento detalle");
            console.error(error);
            res.json({"code":400,"cotero_id":cotero_id,"error":error.error});
        });
    }

    public async getCoteros(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; //este parametro no se esta usando pero tiene que hacerse
        const coteros = await  db.query(coteroRepository.getCoterosAll);       
             res.json(coteros.rows);  
    }
    
    
}
export const coteroControllers = new CoteroControllers();