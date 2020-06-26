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
        this.router.get('/getProductoById', productoControllers_1.productoControllers.getProductoById);
        this.router.get('/getGruposByEmpresa', productoControllers_1.productoControllers.getGruposByEmpresa);
        this.router.put('/updateCantidad', productoControllers_1.productoControllers.updateCantidad);
        this.router.put('/inactivar', productoControllers_1.productoControllers.inactivar);
        this.router.put('/updateProducto', productoControllers_1.productoControllers.updateProducto);
        this.router.put('/saveProducto', productoControllers_1.productoControllers.saveProducto);
        this.router.get('/getProductosByGrupo', productoControllers_1.productoControllers.getProductosByGrupo);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
