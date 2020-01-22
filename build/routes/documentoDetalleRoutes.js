"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentoDetalleControllers_1 = require("../controllers/documentoDetalleControllers");
class DocumentoDetalleRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/createDocumentoDetalle', documentoDetalleControllers_1.documentoDetalleControllers.createDocumentoDetalle);
        this.router.post('/updateDocumentoDetalle', documentoDetalleControllers_1.documentoDetalleControllers.updateDocumentoDetalle);
        this.router.get('/getDocumentoDetalleByDocumento', documentoDetalleControllers_1.documentoDetalleControllers.getDocumentoDetalleByDocumento);
    }
}
const documentoDetalleRoutes = new DocumentoDetalleRoutes();
exports.default = documentoDetalleRoutes.router;
