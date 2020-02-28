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
        this.router.get('/getOrdenesTrabajo', documentoControllers_1.documentoControllers.getOrdenesTrabajo);
        this.router.post('/createDocumentoOrden', documentoControllers_1.documentoControllers.createDocumentoOrden);
        this.router.post('/deleteDocumentoOrdenByOrden', documentoControllers_1.documentoControllers.deleteDocumentoOrdenByOrden);
        this.router.get('/getDocumentoOrdenById', documentoControllers_1.documentoControllers.getDocumentoOrdenById);
        this.router.get('/getOrdenesByDocumentoId', documentoControllers_1.documentoControllers.getOrdenesByDocumentoId);
        this.router.get('/getNominaByEmpleado', documentoControllers_1.documentoControllers.getNominaByEmpleado);
        this.router.get('/getOrdenesByEmpleado', documentoControllers_1.documentoControllers.getOrdenesByEmpleado);
        this.router.post('/cierreNomina', documentoControllers_1.documentoControllers.cierreNomina);
    }
}
const documentoRoutes = new DocumentoRoutes();
exports.default = documentoRoutes.router;
