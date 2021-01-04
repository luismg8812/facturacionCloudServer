"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trasladosControllers_1 = require("../controllers/trasladosControllers");
class TrasladosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/saveRequerimiento', trasladosControllers_1.trasladosControllers.saveRequerimiento);
        this.router.put('/saveRequerimientoDetalle', trasladosControllers_1.trasladosControllers.saveRequerimientoDetalle);
        this.router.put('/updateRequerimiento', trasladosControllers_1.trasladosControllers.updateRequerimiento);
        this.router.get('/getRequerimientos', trasladosControllers_1.trasladosControllers.getRequerimientos);
        this.router.get('/getRequerimientoDetalleByRequerimientoId', trasladosControllers_1.trasladosControllers.getRequerimientoDetalleByRequerimientoId);
        this.router.put('/deleteRequerimientoDetalle', trasladosControllers_1.trasladosControllers.deleteRequerimientoDetalle);
    }
}
const trasladosRoutes = new TrasladosRoutes();
exports.default = trasladosRoutes.router;
