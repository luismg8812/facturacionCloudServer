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
        this.router.post('/createDocumento', documentoControllers_1.documentoControllers.createDocumento);
        this.router.post('/saveDocumentoNota', documentoControllers_1.documentoControllers.saveDocumentoNota);
        this.router.post('/saveInvoice', documentoControllers_1.documentoControllers.saveInvoice);
        this.router.post('/updateDocumento', documentoControllers_1.documentoControllers.updateDocumento);
        this.router.post('/updateDocumentoNota', documentoControllers_1.documentoControllers.updateDocumentoNota);
        this.router.post('/createTipoPagoDocumento', documentoControllers_1.documentoControllers.createTipoPagoDocumento);
        this.router.get('/getDocumentoByTipo', documentoControllers_1.documentoControllers.getDocumentoByTipo);
        this.router.get('/getCuadreCaja', documentoControllers_1.documentoControllers.getCuadreCaja);
        this.router.get('/getOrdenesTrabajo', documentoControllers_1.documentoControllers.getOrdenesTrabajo);
        this.router.post('/createDocumentoOrden', documentoControllers_1.documentoControllers.createDocumentoOrden);
        this.router.post('/deleteDocumentoOrdenByOrden', documentoControllers_1.documentoControllers.deleteDocumentoOrdenByOrden);
        this.router.get('/getDocumentoOrdenById', documentoControllers_1.documentoControllers.getDocumentoOrdenById);
        this.router.get('/getOrdenesByDocumentoId', documentoControllers_1.documentoControllers.getOrdenesByDocumentoId);
        this.router.get('/getNominaByEmpleado', documentoControllers_1.documentoControllers.getNominaByEmpleado);
        this.router.get('/getVentasPorGrupos', documentoControllers_1.documentoControllers.getVentasPorGrupos);
        this.router.get('/getOrdenesByEmpleado', documentoControllers_1.documentoControllers.getOrdenesByEmpleado);
        this.router.post('/cierreNomina', documentoControllers_1.documentoControllers.cierreNomina);
        this.router.get('/getTiposDocumento', documentoControllers_1.documentoControllers.getTiposDocumento);
        this.router.get('/getInvoice', documentoControllers_1.documentoControllers.getInvoice);
        this.router.get('/getDocumentosByFechaAndTipo', documentoControllers_1.documentoControllers.getDocumentosByFechaAndTipo);
        this.router.get('/getDocumentoByTipoAndFecha', documentoControllers_1.documentoControllers.getDocumentoByTipoAndFecha);
        this.router.get('/getDocumentosByTipoPago', documentoControllers_1.documentoControllers.getDocumentosByTipoPago);
        this.router.get('/getCarteraClientes', documentoControllers_1.documentoControllers.getCarteraClientes);
        this.router.get('/getDocumentoForFacturacionElectronica', documentoControllers_1.documentoControllers.getDocumentoForFacturacionElectronica);
        this.router.get('/getByDocumentoId', documentoControllers_1.documentoControllers.getByDocumentoId);
        this.router.get('/getDocumentoInvoiceByDocumento', documentoControllers_1.documentoControllers.getDocumentoInvoiceByDocumento);
        this.router.get('/getDocumentoNotaByDocumento', documentoControllers_1.documentoControllers.getDocumentoNotaByDocumento);
        this.router.get('/getGananciaDocumentos', documentoControllers_1.documentoControllers.getGananciaDocumentos);
    }
}
const documentoRoutes = new DocumentoRoutes();
exports.default = documentoRoutes.router;
