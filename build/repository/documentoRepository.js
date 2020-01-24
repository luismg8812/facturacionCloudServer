"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocumentoRepository {
    constructor() {
        this.getIdDocumento = "select nextval('s_documento')";
        this.getOrdenesTrabajo = "";
    }
}
exports.documentoRepository = new DocumentoRepository();
