"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductoRepository {
    constructor() {
        this.getProductosByEmpresa = "select * from producto where empresa_id = $1";
        this.getProductoById = "select * from producto where empresa_id = $1 and producto_id = $2";
    }
}
exports.productoRepository = new ProductoRepository();
