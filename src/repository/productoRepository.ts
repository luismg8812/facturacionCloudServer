

class ProductoRepository{
    public getProductosByEmpresa:string="select * from producto where empresa_id = $1 and estado=1 order by nombre"; 
    public getProductosByGrupo:string=""; 
    public getGruposByEmpresa:string="select * from grupo where empresa_id = $1 order by nombre"; 
    public getProductoById:string="select * from producto where empresa_id = $1 and producto_id = $2"; 
    public getIdProducto:string="select nextval('s_producto')"; 
    public getIdGrupo:string="select nextval('s_grupo')"; 

}

export const productoRepository = new ProductoRepository();