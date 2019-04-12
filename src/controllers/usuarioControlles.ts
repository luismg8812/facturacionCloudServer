import {Request,Response} from 'express';
import { usuarioRepository } from '../repository/usuarioRepository';
import db  from '../database';

class UsuarioControllers{
    public async usuarioByMail (req:Request, res:Response):Promise<any>{
        const mail = req.query.mail; 
        console.log(mail);
        const usuario = await  db.query(usuarioRepository.usuarioByMail,[mail]);       
             res.json(usuario.rows);   
    }

    public async getByUsuario (req:Request, res:Response):Promise<any>{
        const usuario = req.query.usuario;
        const empresaId = req.query.empresaId;
        const rolId = req.query.rolId;
        console.log(empresaId);
        const usuarioRes = await  db.query(usuarioRepository.getByUsuario,[empresaId]);       
             res.json(usuarioRes.rows);  
    }

    public async getRolByIds (req:Request, res:Response):Promise<any>{
        console.log(req.query);
        let ids:string = req.query.ids; 
        var vid2=ids.split(",");
        console.log(vid2);
        const roles = await  db.query("select * from rol where rol_id in ("+vid2.toString()+")");       
             res.json(roles.rows);  
          
    }

    

    public async opcionUsuarioByUsuario(req:Request, res:Response):Promise<any>{
        const usuarioId = req.query.usuarioId; 
        const menuId = req.query.menuId; 
        const opcionUsuario = await  db.query(usuarioRepository.opcionUsuarioByUsuario,[usuarioId,menuId]);       
             res.json(opcionUsuario.rows);  
       
    }

    public async opcionUsuarioByUsuarioSinMenu(req:Request, res:Response):Promise<any>{
        const usuarioId = req.query.usuarioId; 
        const opcionUsuario = await  db.query(usuarioRepository.opcionUsuarioByUsuarioSinMenu,[usuarioId]);       
             res.json(opcionUsuario.rows);  
       
    }

    

    public deleteUsuario (req:Request, res:Response){
        res.json({"delete_usuario": +req.params.id});
    }

    public async createUsuario (req:Request, res:Response):Promise<any>{
        
        let roles:string[]=req.query.rolId.split(",");
        console.log(req.query.rolId);
        delete req.body.usuario_id; 
        var empresa_id =req.body.empresa_id;
        var nombre =req.body.nombre;
        var  apellido=req.body.apellido;
        var correo =req.body.correo;
        var clave =req.body.clave;
        var fecha_registro =req.body.fecha_registro;
        var  identificacion=req.body.identificacion;
        var  estado=req.body.estado;
        console.log(req.body);
        await db.query("INSERT INTO usuario(empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado) VALUES ($1,$2,$3,$4,$5,$6,$7,$8 )", [empresa_id,nombre,apellido,correo,clave,fecha_registro,identificacion,estado]);
        const usuario = await  db.query(usuarioRepository.usuarioByMail,[correo]);
        for(let i=0; i<roles.length;i++){
            await db.query("INSERT INTO rol_usuario(rol_id, usuario_id) VALUES ($1,$2)", [roles[i],usuario.rows[0].usuario_id]);
        }
        console.log("usuario guardo:");
        res.json({"code":200,"usuario_id":usuario.rows[0].usuario_id});
    }

    public async updateUsuario (req:Request, res:Response):Promise<any>{
        
        let roles:string[]=req.query.rolId.split(",");
        console.log(req.query.rolId);
        var usuario_id =req.body.usuario_id;
        var empresa_id =req.body.empresa_id;
        var nombre =req.body.nombre;
        var  apellido=req.body.apellido;
        var correo =req.body.correo;
        var clave =req.body.clave;
        var fecha_registro =req.body.fecha_registro;
        var  identificacion=req.body.identificacion;
        var  estado=req.body.estado;
        console.log(req.body);
        await db.query("UPDATE usuario set empresa_id=$1, nombre=$2, apellido=$3, correo=$4, clave=$5, fecha_registro=$6, identificacion=$7, estado=$8 where usuario_id=$9", [empresa_id,nombre,apellido,correo,clave,fecha_registro,identificacion,estado,usuario_id]);
        const usuario = await  db.query(usuarioRepository.deleteRolUsuario,[usuario_id]);
        for(let i=0; i<roles.length;i++){
            await db.query("INSERT INTO rol_usuario(rol_id, usuario_id) VALUES ($1,$2)", [roles[i],usuario_id]);
        }
        console.log("usuario guardo:");
        res.json({"code":200,"usuario_id":usuario_id});
    }
 

    public async getRolByUsuario (req:Request, res:Response):Promise<any>{
        const usuarioId = req.query.usuarioId; 
        console.log(usuarioId);
        const rol = await  db.query(usuarioRepository.getRolByUsuario,[usuarioId]);       
             res.json(rol.rows);        
    }

    public async getSubMenuAll (req:Request, res:Response):Promise<any>{
        
        const rol = await  db.query(usuarioRepository.getSubMenuAll);       
             res.json(rol.rows);        
    }
}

export const usuarioController = new UsuarioControllers();