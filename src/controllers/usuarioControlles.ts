import { Request, Response } from 'express';
import { usuarioRepository } from '../repository/usuarioRepository';
import db from '../database';

class UsuarioControllers {
    public async usuarioByMail(req: Request, res: Response): Promise<any> {
        const mail = req.query.mail;
        console.log(mail);
        const usuario = await db.query(usuarioRepository.usuarioByMail, [mail]);
        res.json(usuario.rows);
    }

    public async getByUsuario(req: Request, res: Response): Promise<any> {
        const usuario = req.query.usuario;
        const empresaId = req.query.empresaId;
        const rolId = req.query.rolId;
        console.log(empresaId);
        const usuarioRes = await db.query(usuarioRepository.getByUsuario, [empresaId]);
        res.json(usuarioRes.rows);
    }

    public async usuarioByRol(req: Request, res: Response): Promise<any> {
        const empresaId = req.query.empresaId;
        const rolId = req.query.rolId;
        const tipoDocumentoId = req.query.tipoDocumentoId;
        const fechaInicial = req.query.fechaInicial;
        const fechaFinal = req.query.fechaFinal;
        console.log(req.query);
        let query = "select  usuario.nombre, sum(documento.total) total, count(*) num from rol_usuario, usuario, documento "+
        " where rol_usuario.usuario_id=usuario.usuario_id "+
        " and usuario.usuario_id = documento.usuario_id "+
        " and usuario.empresa_id = "+empresaId+
        " and rol_id= "+rolId+
        " and documento.tipo_documento_id= "+tipoDocumentoId+
        " and documento.impreso=1"+
        " and DATE(documento.fecha_registro) BETWEEN '"+fechaInicial+"' and '"+fechaFinal+"'"+
        " GROUP by usuario.nombre";
        console.log(query);
        const usuarioRes = await db.query(query);
        res.json(usuarioRes.rows);
    }

    public async getProporcion(req: Request, res: Response): Promise<any> {
        const empresaId = req.query.empresaId;
        console.log(req.query);
        let query = "select * from proporcion where empresa_id = "+empresaId;
        console.log(query);
        const usuarioRes = await db.query(query);
        res.json(usuarioRes.rows);
    }

    

    

    public async getRolByIds(req: Request, res: Response): Promise<any> {
        console.log(req.query);
        let ids: string = <string>req.query.ids;
        var vid2 = ids.split(",");
        console.log(vid2);
        const roles = await db.query("select * from rol where rol_id in (" + vid2.toString() + ")");
        res.json(roles.rows);

    }



    public async opcionUsuarioByUsuario(req: Request, res: Response): Promise<any> {
        const usuarioId = req.query.usuarioId;
        const menuId = req.query.menuId;
        const opcionUsuario = await db.query(usuarioRepository.opcionUsuarioByUsuario, [usuarioId, menuId]);
        res.json(opcionUsuario.rows);

    }

    public async opcionUsuarioByUsuarioSinMenu(req: Request, res: Response): Promise<any> {
        const usuarioId = req.query.usuarioId;
        const opcionUsuario = await db.query(usuarioRepository.opcionUsuarioByUsuarioSinMenu, [usuarioId]);
        res.json(opcionUsuario.rows);
    }

    public async opcionPuntoVentaByUsuario(req: Request, res: Response): Promise<any> {
        const usuarioId = req.query.usuarioId;
        const opcionUsuario = await db.query(usuarioRepository.opcionPuntoVentaByUsuario, [usuarioId]);
        res.json(opcionUsuario.rows);
    }



    public async getActivacionByUsuario(req: Request, res: Response): Promise<any> {
        const usuarioId = req.query.usuarioId;
        const opcionUsuario = await db.query(usuarioRepository.getActivacionByUsuario, [usuarioId]);
        res.json(opcionUsuario.rows);
    }





    public deleteUsuario(req: Request, res: Response) {
        res.json({ "delete_usuario": +req.params.id });
    }

    public async getFile(req: Request, res: Response): Promise<any> {
        const nombre = req.query.nombre;
        if(nombre==null){
            res.json("");
        }else{
            var contents= require("fs").readFileSync("resources/img/"+nombre);
        new Buffer(contents).toString('base64')
            res.json(new Buffer(contents).toString('base64'));
           // console.log(new Buffer(contents).toString('base64'));
          //this.downloadURLLocal = reader.result;
        }
        
      
    
        
        
    }


    public async postFile(req: Request, res: Response): Promise<any> {
        //console.log(req.body);
        let file: File = req.body;
        //console.log(file);
        var base64Data = req.body.foto.replace(/^data:image\/png;base64,/, "");
        require("fs").writeFile("resources/img/"+req.body.nombre, base64Data, 'base64', function (err: any) {
            console.log(err);
        }); 
        res.json({ "code": 200, "usuario_id": "cualquier mk" });
    }

    public async createUsuario(req: Request, res: Response): Promise<any> {

        let roles: string[] = (<string>req.query.rolId).split(",");
        console.log(req.query.rolId);
        delete req.body.usuario_id;
        var empresa_id = req.body.empresa_id;
        var nombre = req.body.nombre;
        var apellido = req.body.apellido;
        var correo = req.body.correo;
        var clave = req.body.clave;
        var fecha_registro = req.body.fecha_registro;
        var identificacion = req.body.identificacion;
        var estado = req.body.estado;
        console.log(req.body);
        await db.query("INSERT INTO usuario(empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado) VALUES ($1,$2,$3,$4,$5,$6,$7,$8 )", [empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado]);
        const usuario = await db.query(usuarioRepository.usuarioByMail, [correo]);
        for (let i = 0; i < roles.length; i++) {
            await db.query("INSERT INTO rol_usuario(rol_id, usuario_id) VALUES ($1,$2)", [roles[i], usuario.rows[0].usuario_id]);
        }
        console.log("usuario guardo:");
        res.json({ "code": 200, "usuario_id": usuario.rows[0].usuario_id });
    }

    public async createUsuarioMasivo(req: Request, res: Response): Promise<any>{
        let usuarios: any[] = req.body;
        usuarios.forEach(async usuario => {
            var usuario_id = usuario.usuario_id;
            var empresa_id = usuario.empresa_id;
            var nombre = usuario.nombre;
            var apellido = usuario.apellido;
            var correo = usuario.correo;
            var clave = usuario.clave;
            var fecha_registro = usuario.fecha_registro;
            var identificacion = usuario.identificacion;
            var estado = usuario.estado;
            var tipoVinculacion = usuario.tipoVinculacion;
            var supervisor= usuario.supervisor;
            var area= usuario.area;
            var sede= usuario.sede;
            var puesto= usuario.puesto;
            if( usuario_id == 0 || usuario_id == ""){
                await db.query("INSERT INTO usuario(empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado, tipo_vinculacion, supervisor, area, sede, puesto) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13 )", [empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado,tipoVinculacion, supervisor, area, sede, puesto]);    
            } else {
                await db.query("UPDATE usuario set empresa_id=$1, nombre=$2, apellido=$3, correo=$4, clave=$5, fecha_registro=$6, identificacion=$7, estado=$8, tipo_vinculacion=$9, supervisor=$10, area=$11, sede=$12, puesto=$13 where usuario_id=$14", [empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado,tipoVinculacion, supervisor, area, sede, puesto,usuario_id]);
            }
        });
        res.json({ "code": 200, "response":req.body });
    }

    public async updateUsuario(req: Request, res: Response): Promise<any> {

        let roles: string[] = (<string>req.query.rolId).split(",");
        console.log(req.query.rolId);
        var usuario_id = req.body.usuario_id;
        var empresa_id = req.body.empresa_id;
        var nombre = req.body.nombre;
        var apellido = req.body.apellido;
        var correo = req.body.correo;
        var clave = req.body.clave;
        var fecha_registro = req.body.fecha_registro;
        var identificacion = req.body.identificacion;
        var estado = req.body.estado;
        console.log(req.body);
        await db.query("UPDATE usuario set empresa_id=$1, nombre=$2, apellido=$3,  fecha_registro=$4, identificacion=$5, estado=$6 where usuario_id=$7", [empresa_id, nombre, apellido,  fecha_registro, identificacion, estado, usuario_id]);
        const usuario = await db.query(usuarioRepository.deleteRolUsuario, [usuario_id]);
        for (let i = 0; i < roles.length; i++) {
            await db.query("INSERT INTO rol_usuario(rol_id, usuario_id) VALUES ($1,$2)", [roles[i], usuario_id]);
        }
        console.log("usuario guardo:");
        res.json({ "code": 200, "usuario_id": usuario_id });
    }

    public async updateProporcion(req: Request, res: Response): Promise<any> {
        var proporcion_id = req.body.proporcion_id;
        var contador_factura = req.body.contador_factura;
        var contador_remision = req.body.contador_remision;
        console.log(req.body);
        await db.query("UPDATE proporcion set contador_factura=$1, contador_remision=$2 where proporcion_id=$3", [contador_factura, contador_remision, proporcion_id]);
        console.log("proporcion actualizada:");
        res.json({ "code": 200, "proporcion_id": proporcion_id });
    }


    public async getRolByUsuario(req: Request, res: Response): Promise<any> {
        const usuarioId = req.query.usuarioId;
        console.log(usuarioId);
        const rol = await db.query(usuarioRepository.getRolByUsuario, [usuarioId]);
        res.json(rol.rows);
    }

    

    public async getSubMenuAll(req: Request, res: Response): Promise<any> {

        const rol = await db.query(usuarioRepository.getSubMenuAll);
        res.json(rol.rows);
    }

    public async getActivacionAll(req: Request, res: Response): Promise<any> {

        const rol = await db.query(usuarioRepository.getActivacionAll);
        res.json(rol.rows);
    }

    public async guardarRutas(req: Request, res: Response): Promise<any> {
        const usuarioId = req.query.usuarioId;
        let subMenuId: string[] = (<string>req.query.subMenuId).split(",");
        console.log(subMenuId);
        await db.query(usuarioRepository.deleteOpcionUsuario, [usuarioId]);

        for (let i = 0; i < subMenuId.length; i++) {
            console.log(subMenuId[i]);
            await db.query("INSERT INTO opcion_usuario(sub_menu_id, usuario_id, fecha_registro,estado) VALUES ($1,$2,NOW(),1)", [subMenuId[i], usuarioId]);
        }
        console.log("rutas guardo:");
        res.json({ "code": 200, "usuario_id": usuarioId });

    }

    public async guardarActivaciones(req: Request, res: Response): Promise<any> {
        const usuarioId = req.query.usuarioId;
        let activacionId: string[] = (<string>req.query.activacionId).split(",");
        await db.query(usuarioRepository.deleteActivacionUsuario, [usuarioId]);
        console.log(usuarioId);
        for (let i = 0; i < activacionId.length; i++) {
            await db.query("INSERT INTO activacion_usuario(activacion_id, usuario_id) VALUES ($1,$2)", [activacionId[i], usuarioId]);
        }
        console.log("rutas guardo:");
        res.json({ "code": 200, "usuario_id": usuarioId });
    }

}

export const usuarioController = new UsuarioControllers();