

class ProductoRepository{
    public getProductosByEmpresa:string="select * from producto where empresa_id = $1 and estado=1 order by nombre"; 
    public getProductosByGrupo:string=""; 
    public getGruposByEmpresa:string="select * from grupo where empresa_id = $1 order by nombre"; 
    public getSubGruposByEmpresa:string="select * from sub_grupo where empresa_id = $1 order by nombre"; 
    public getProductoById:string="select * from producto where empresa_id = $1 and producto_id = $2"; 
    public getProductoByCodBarras:string="select * from producto where empresa_id = $1 and codigo_barras = $2"; 
    public getProductoByNombre:string="select * from producto where empresa_id = $1 and lower(nombre) like  lower('%$2%')"; 
    
    public getProductoPreciosById:string="select * from producto_precios where  producto_id = $1"; 
    
    public getIdProducto:string="select nextval('s_producto')"; 
    public getIdProductoPrecios:string="select nextval('s_producto_precios')"; 
    public getIdGrupo:string="select nextval('s_grupo')"; 

}

export const productoRepository = new ProductoRepository();