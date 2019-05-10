

class ClienteRepository{
    public getClientesByEmpresa:string="select * from cliente where empresa_id = $1"; 
    public getConfiguracionByEmpresa = "select * from configuracion where empresa_id = $1"; 
    public getTipoPago = "select * from tipo_pago";
    public getImpresorasEmpresa:string="select * from impresora_empresa where empresa_id = $1"; 
    
}

export const clienteRepository = new ClienteRepository();