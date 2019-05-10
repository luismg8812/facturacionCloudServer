"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClienteRepository {
    constructor() {
        this.getClientesByEmpresa = "select * from cliente where empresa_id = $1";
        this.getConfiguracionByEmpresa = "select * from configuracion where empresa_id = $1";
        this.getTipoPago = "select * from tipo_pago";
        this.getImpresorasEmpresa = "select * from impresora_empresa where empresa_id = $1";
    }
}
exports.clienteRepository = new ClienteRepository();
