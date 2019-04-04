"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioControlles_1 = require("../controllers/usuarioControlles");
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/usuarioByMail', usuarioControlles_1.usuarioController.usuarioByMail);
        this.router.delete('/deleteUsuario/:id', usuarioControlles_1.usuarioController.deleteUsuario);
        this.router.post('/createUsuario', usuarioControlles_1.usuarioController.createUsuario);
        this.router.put('/updateUsuario/:id', usuarioControlles_1.usuarioController.updateUsuario);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
