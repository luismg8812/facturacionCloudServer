

class ProductoRepository{
    public getProductosByEmpresa:string="select * from producto where empresa_id = $1 and estado=1"; 
    public getProductoById:string="select * from producto where empresa_id = $1 and producto_id = $2"; 
    public getIdProducto:string="select nextval('s_producto')"; 
}

export const productoRepository = new ProductoRepository();