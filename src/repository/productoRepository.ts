

class ProductoRepository{
    public getProductosByEmpresa:string="select * from producto where empresa_id = $1"; 
}

export const productoRepository = new ProductoRepository();