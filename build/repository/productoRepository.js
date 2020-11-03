"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductoRepository {
    constructor() {
        this.getProductosByEmpresa = "select * from producto where empresa_id = $1 and estado=1 order by nombre";
        this.getProductosByGrupo = "";
        this.getGruposByEmpresa = "select * from grupo where empresa_id = $1 order by nombre";
        this.getSubGruposByEmpresa = "select * from sub_grupo where empresa_id = $1 order by nombre";
        this.getProductoById = "select * from producto where empresa_id = $1 and producto_id = $2";
        this.getProductoByCodBarras = "select * from producto where empresa_id = $1 and codigo_barras = $2";
        this.getProductoByNombre = "select * from producto where empresa_id = $1 and lower(nombre) like  lower('%$2%')";
        this.getProductoPreciosById = "select * from producto_precios where  producto_id = $1";
        this.getIdProducto = "select nextval('s_producto')";
        this.getIdProductoPrecios = "select nextval('s_producto_precios')";
        this.getIdGrupo = "select nextval('s_grupo')";
    }
}
exports.productoRepository = new ProductoRepository();
