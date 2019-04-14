

class UsuarioRepository{
    public usuarioByMail:string="select * from usuario where correo = $1"; 
    public opcionUsuarioByUsuario:string="select * from sub_menu where sub_menu_id in (select sub_menu_id from opcion_usuario where usuario_id=$1 ) and menu_id = $2;"; 
    public opcionUsuarioByUsuarioSinMenu:string="select * from sub_menu where sub_menu_id in (select sub_menu_id from opcion_usuario where usuario_id=$1 )"; 
    public getActivacionByUsuario:string="select * from activacion where activacion_id in (select activacion_id from activacion_usuario where usuario_id=$1 )"; 
   
    
    public getByUsuario:string="select * from usuario where empresa_id = $1"; 
    public getRolByUsuario:string="select * from rol_usuario where usuario_id = $1";
    public deleteRolUsuario:string="delete from rol_usuario where usuario_id = $1";
    public deleteOpcionUsuario:string="delete from opcion_usuario where usuario_id = $1";
    public deleteActivacionUsuario:string="delete from activacion_usuario where usuario_id = $1";
    public getSubMenuAll:string="select * from sub_menu";
    public getActivacionAll:string="select * from activacion";
    
    
}

export const usuarioRepository = new UsuarioRepository();