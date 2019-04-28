"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClienteRepository {
    constructor() {
        this.getClientesByEmpresa = "select * from cliente where empresa_id = $1";
        this.getConfiguracionByEmpresa = "select * from configuracion where empresa_id = $1";
        this.getTipoPago = "select * from tipo_pago";
    }
}
exports.clienteRepository = new ClienteRepository();
