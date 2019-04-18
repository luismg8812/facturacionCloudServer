

class ProductoRepository{
    public getProductosByEmpresa:string="select * from producto where empresa_id = $1"; 
    public getProductoById:string="select * from producto where empresa_id = $1 and producto_id = $2"; 
}

export const productoRepository = new ProductoRepository();