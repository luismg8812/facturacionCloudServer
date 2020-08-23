"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmpresaRepository {
    constructor() {
        this.pagosEmpresaByEmpresa = "select * from PAGOS_EMPRESA where empresa_id = $1";
        this.getEmpresaById = "select * from EMPRESA where empresa_id = $1";
    }
}
exports.empresaRepository = new EmpresaRepository();
