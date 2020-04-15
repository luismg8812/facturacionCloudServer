"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocumentoRepository {
    constructor() {
        this.getIdDocumento = "select nextval('s_documento')";
        this.getIdDocumentoInvoice = "select nextval('s_DOCUMENTO_INVOICE')";
        this.getOrdenesTrabajo = "";
    }
}
exports.documentoRepository = new DocumentoRepository();
