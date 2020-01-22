"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocumentoDetalleRepository {
    constructor() {
        this.getIdDocumentoDetalle = "select nextval('s_documento_detalle')";
        this.getDocumentoDetalleByDocumento = "select * from DOCUMENTO_DETALLE where documento_id = $1";
    }
}
exports.documentoDetalleRepository = new DocumentoDetalleRepository();
