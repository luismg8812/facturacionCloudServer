import {Request,Response} from 'express';
import { usuarioRepository } from '../repository/usuarioRepository';
import db  from '../database';

class UsuarioControllers{
    public async usuarioByMail (req:Request, res:Response):Promise<any>{
        const mail = req.query.mail; 
        console.log(mail);
        const usuario = await  db.query(usuarioRepository.usuarioByMail,[mail]);       
             res.json(usuario.rows);  
        res.json({"messsage":"usuario controller"});  
    }

    public async opcionUsuarioByUsuario(req:Request, res:Response):Promise<any>{
        const usuarioId = req.query.usuarioId; 
        const menuId = req.query.menuId; 
        const opcionUsuario = await  db.query(usuarioRepository.opcionUsuarioByUsuario,[usuarioId,menuId]);       
             res.json(opcionUsuario.rows);  
       
    }

    public deleteUsuario (req:Request, res:Response){
        res.json({"delete_usuario": +req.params.id});
    }

    public async createUsuario (req:Request, res:Response):Promise<any>{
        //await db.query("insert into usuario set ? ",[req.body]);
        //res.json({"message:"user saved"});
    }
 
    public updateUsuario (req:Request, res:Response){
        res.json({"update_usuario": +req.params.id});
    }
}

export const usuarioController = new UsuarioControllers();