"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductoRepository {
    constructor() {
        this.getProductosByEmpresa = "select * from producto where empresa_id = $1 and estado=1 order by nombre";
        this.getGruposByEmpresa = "select * from grupo where empresa_id = $1 order by nombre";
        this.getProductoById = "select * from producto where empresa_id = $1 and producto_id = $2";
        this.getIdProducto = "select nextval('s_producto')";
    }
}
exports.productoRepository = new ProductoRepository();
