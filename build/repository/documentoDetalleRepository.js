"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocumentoDetalleRepository {
    constructor() {
        this.getIdDocumentoDetalle = "select nextval('s_documento_detalle')";
    }
}
exports.documentoDetalleRepository = new DocumentoDetalleRepository();
