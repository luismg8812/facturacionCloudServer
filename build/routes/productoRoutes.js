"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoControllers_1 = require("../controllers/productoControllers");
class ProductoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getProductosByEmpresa', productoControllers_1.productoControllers.getProductosByEmpresa);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
