

class UsuarioRepository{
    public usuarioByMail:string="select * from usuario where correo = $1"; 
    public opcionUsuarioByUsuario:string="select * from sub_menu where sub_menu_id in (select sub_menu_id from opcion_usuario where usuario_id=$1 ) and menu_id = $2 order by nombre"; 
    public opcionUsuarioByUsuarioSinMenu:string="select * from sub_menu where sub_menu_id in (select sub_menu_id from opcion_usuario where usuario_id=$1 ) order by nombre"; 
    public getActivacionByUsuario:string="select * from activacion where activacion_id in (select activacion_id from activacion_usuario where usuario_id=$1 )"; 
    public getEmpleadoByUsuario:string="select * from empleado where empleado_id in (select empleado_id from usuario_empleado where usuario_id=$1 )"; 
    
    public opcionPuntoVentaByUsuario:string="select * from sub_menu where sub_menu_id in (select sub_menu_id from opcion_usuario where usuario_id=$1 ) and op= 1"; 
    public getCamposInventarioByUsuario:string="select * from campo_inventario where campo_inventario_id in (select campo_inventario_id from campo_inventario_usuario where usuario_id=$1 )"; 
    public getEmpresas:string="select * from  empresa order by nombre"; 
    public getByUsuario:string="select * from usuario where empresa_id = $1"; 
    public getRolByUsuario:string="select * from rol_usuario where usuario_id = $1";
    public deleteRolUsuario:string="delete from rol_usuario where usuario_id = $1";
    public deleteOpcionUsuario:string="delete from opcion_usuario where usuario_id = $1";
    public deleteActivacionUsuario:string="delete from activacion_usuario where usuario_id = $1";
    public deleteEmpleadoUsuario:string="delete from usuario_empleado where usuario_id = $1";
    
    public deletecampoInventarioUsuario:string="delete from campo_inventario_usuario where usuario_id = $1";
    public getSubMenuAll:string="select * from sub_menu";
    public getActivacionAll:string="select * from activacion";
    public getCampoInventarioAll:string="select * from campo_inventario order by nombre";
    
}

export const usuarioRepository = new UsuarioRepository();