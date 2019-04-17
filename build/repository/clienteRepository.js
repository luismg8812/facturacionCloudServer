"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClienteRepository {
    constructor() {
        this.getClientesByEmpresa = "select * from cliente where empresa_id = $1";
    }
}
exports.clienteRepository = new ClienteRepository();
