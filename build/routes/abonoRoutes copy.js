"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const abonoControllers_1 = require("../controllers/abonoControllers");
class ControlInventarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/saveAbono', abonoControllers_1.abonoControllers.saveAbono);
        this.router.get('/getAbonosByDocumento', abonoControllers_1.abonoControllers.getAbonosByDocumento);
    }
}
const controlInventarioRoutes = new ControlInventarioRoutes();
exports.default = controlInventarioRoutes.router;
