

class ClienteRepository{
    public getClientesByEmpresa:string="select * from cliente where empresa_id = $1"; 
    public getConfiguracionByEmpresa = "select * from configuracion where empresa_id = $1"; 
    public getTipoPago = "select * from tipo_pago";
    public getImpresorasEmpresa:string="select * from impresora_empresa where empresa_id = $1 order by numero_impresora"; 
    public getIdCliente:string="select nextval('s_cliente')";
    public getTipoIdentificacionAll = "select * from tipo_identificacion order by tipo_identificacion_id";
    
}

export const clienteRepository = new ClienteRepository();