

class UsuarioRepository{
    public usuarioByMail:string="select * from usuario where correo = $1"; 
    public opcionUsuarioByUsuario:string="select * from sub_menu where sub_menu_id in (select sub_menu_id from opcion_usuario where usuario_id=$1 ) and menu_id = $2;"; 
    public getByUsuario:string="select * from usuario where empresa_id = $1"; 
    public createUsuario:string="";
}

export const usuarioRepository = new UsuarioRepository();