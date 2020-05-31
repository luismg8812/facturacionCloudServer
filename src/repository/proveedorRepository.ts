

class ProveedorRepository{
    public getProveedorByEmpresa:string="select * from proveedor where empresa_id = $1"; 
    public getIdProveedor:string="select nextval('s_proveedor')"; 
}

export const proveedorRepository = new ProveedorRepository();