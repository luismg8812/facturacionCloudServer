"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentoControllers_1 = require("../controllers/documentoControllers");
class DocumentoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/createDocumento', documentoControllers_1.documentoControllers.createDocumento);
        this.router.post('/updateDocumento', documentoControllers_1.documentoControllers.updateDocumento);
        this.router.post('/createTipoPagoDocumento', documentoControllers_1.documentoControllers.createTipoPagoDocumento);
        this.router.get('/getDocumentoByTipo', documentoControllers_1.documentoControllers.getDocumentoByTipo);
        this.router.get('/getCuadreCaja', documentoControllers_1.documentoControllers.getCuadreCaja);
    }
}
const documentoRoutes = new DocumentoRoutes();
exports.default = documentoRoutes.router;
