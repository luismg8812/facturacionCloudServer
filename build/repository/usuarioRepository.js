"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioRepository {
    constructor() {
        this.usuarioByMail = "select * from usuario where correo = $1";
        this.opcionUsuarioByUsuario = "select * from sub_menu where sub_menu_id in (select sub_menu_id from opcion_usuario where usuario_id=$1 ) and menu_id = $2;";
        this.opcionUsuarioByUsuarioSinMenu = "select * from sub_menu where sub_menu_id in (select sub_menu_id from opcion_usuario where usuario_id=$1 )";
        this.getByUsuario = "select * from usuario where empresa_id = $1";
        this.getRolByUsuario = "select * from rol_usuario where usuario_id = $1";
        this.deleteRolUsuario = "delete from rol_usuario where usuario_id = $1";
        this.getSubMenuAll = "select * from sub_menu";
    }
}
exports.usuarioRepository = new UsuarioRepository();
