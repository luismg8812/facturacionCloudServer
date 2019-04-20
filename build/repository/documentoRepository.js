"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocumentoRepository {
    constructor() {
        this.getIdDocumento = "select nextval('s_documento')";
    }
}
exports.documentoRepository = new DocumentoRepository();
