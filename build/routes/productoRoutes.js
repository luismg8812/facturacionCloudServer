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
        this.router.get('/getProductoPreciosById', productoControllers_1.productoControllers.getProductoPreciosById);
        this.router.get('/getGruposByEmpresa', productoControllers_1.productoControllers.getGruposByEmpresa);
        this.router.get('/getSubGruposByEmpresa', productoControllers_1.productoControllers.getSubGruposByEmpresa);
        this.router.put('/updateCantidad', productoControllers_1.productoControllers.updateCantidad);
        this.router.put('/inactivar', productoControllers_1.productoControllers.inactivar);
        this.router.put('/updateProducto', productoControllers_1.productoControllers.updateProducto);
        this.router.put('/updateProductoPrecios', productoControllers_1.productoControllers.updateProductoPrecios);
        this.router.put('/updateGrupo', productoControllers_1.productoControllers.updateGrupo);
        this.router.put('/updateSubGrupo', productoControllers_1.productoControllers.updateSubGrupo);
        this.router.put('/saveProducto', productoControllers_1.productoControllers.saveProducto);
        this.router.put('/saveProductoPrecios', productoControllers_1.productoControllers.saveProductoPrecios);
        this.router.put('/saveGrupo', productoControllers_1.productoControllers.saveGrupo);
        this.router.put('/saveSubGrupo', productoControllers_1.productoControllers.saveSubGrupo);
        this.router.get('/getProductosByGrupo', productoControllers_1.productoControllers.getProductosByGrupo);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
