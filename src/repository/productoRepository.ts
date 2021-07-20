

class ProductoRepository{
    public getProductosByEmpresa:string="select * from producto where empresa_id = $1 and estado=1 order by nombre"; 
    public getControlInventario:string="select * from control_inventario where empresa_id = $1 order by nombre "; 
    public getControlInventarioByProductoId:string="select * from control_inventario where producto_id = $1 order by nombre "; 
    public getProductosByGrupo:string=""; 
    public getGruposByEmpresa:string="select * from grupo where empresa_id = $1 order by nombre"; 
    public getSubGruposByEmpresa:string="select * from sub_grupo where empresa_id = $1 order by nombre"; 
    public getProductoById:string="select * from producto where empresa_id = $1 and producto_id = $2 and estado=1"; 
    public getProductoByCodBarras:string="select * from producto where empresa_id = $1 and codigo_barras = $2 and estado=1"; 
    public getProductoByNombre:string="select * from producto where empresa_id = $1 and lower(nombre) like  lower('%$2%') and estado=1"; 
    
    public getProductoPreciosById:string="select * from producto_precios where  producto_id = $1"; 
    public getSubProductoByProductoId:string="select * from sub_producto where  producto_padre = $1"; 
    public getIdProducto:string="select nextval('s_producto')"; 
    public getIdProductoPrecios:string="select nextval('s_producto_precios')"; 
    public getIdControlInventario:string="select nextval('s_control_inventario')"; 
    public getIdGrupo:string="select nextval('s_grupo')"; 
    public getIdSubProducto:string="select nextval('s_sub_producto')"; 
    public getIdAuditoria:string="select nextval('s_auditoria')"; 

}

export const productoRepository = new ProductoRepository();