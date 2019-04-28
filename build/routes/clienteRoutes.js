"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteControllers_1 = require("../controllers/clienteControllers");
class ClienteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getClientesByEmpresa', clienteControllers_1.clienteControllers.getClientesByEmpresa);
        this.router.get('/getConfiguracionByEmpresa', clienteControllers_1.clienteControllers.getConfiguracionByEmpresa);
        this.router.get('/getTipoPago', clienteControllers_1.clienteControllers.getTipoPago);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
