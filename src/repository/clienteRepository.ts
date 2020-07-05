

class ClienteRepository{
    public getClientesByEmpresa:string="select * from cliente where empresa_id = $1"; 
    public getConfiguracionByEmpresa = "select * from configuracion where empresa_id = $1"; 
    public getTipoPago = "select * from tipo_pago";
    public getResolucion = "select * from RESOLUCION_EMPRESA where empresa_id = $1 order by resolucion_empresa_id";
    public getImpresorasEmpresa:string="select * from impresora_empresa where empresa_id = $1 order by numero_impresora"; 
    public getIdCliente:string="select nextval('s_cliente')";
    public getTipoIdentificacionAll = "select * from tipo_identificacion order by tipo_identificacion_id";
    public getTipoEmpresa = "select * from fact_tipo_empresa order by nombre";
    
}

export const clienteRepository = new ClienteRepository();