"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioRepository {
    constructor() {
        this.usuarioByMail = "select * from usuario where correo = $1";
    }
}
exports.usuarioRepository = new UsuarioRepository();
