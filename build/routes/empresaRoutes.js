"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresaControllers_1 = require("../controllers/empresaControllers");
class EmpresaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/pagosEmpresaByEmpresa', empresaControllers_1.empresaControllers.pagosEmpresaByEmpresa);
    }
}
const usuarioRoutes = new EmpresaRoutes();
exports.default = usuarioRoutes.router;
