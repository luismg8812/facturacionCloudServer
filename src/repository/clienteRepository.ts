

class ClienteRepository{
    public getClientesByEmpresa:string="select * from cliente where empresa_id = $1"; 
    public getConfiguracionByEmpresa = "select * from configuracion where empresa_id = $1"; 
    public getById = "select * from cliente where cliente_id = $1"; 
    public getTipoPago = "select * from tipo_pago";
    public getResolucion = "select * from RESOLUCION_EMPRESA where empresa_id = $1 order by resolucion_empresa_id";
    public getResolucionId = "select * from RESOLUCION_EMPRESA where resolucion_empresa_id = $1 ";
    public getImpresorasEmpresa:string="select * from impresora_empresa where empresa_id = $1 order by numero_impresora"; 
    public getIdCliente:string="select nextval('s_cliente')";
    public getIdVehiculo:string="select nextval('s_vehiculo')";    
    public getIdResponsabilidadCliente:string="select nextval('s_responsabilidad_fiscal_cliente_id')";
    public getTipoIdentificacionAll = "select * from tipo_identificacion order by tipo_identificacion_id";
    public getTipoEmpresa = "select * from fact_tipo_empresa order by nombre";
    public getResponsabilidades = "select * from responsabilidad_fiscal where estado=1 order by codigo";
    public getResponsabilidadesByCliente = "select * from responsabilidad_fiscal where responsabilidad_fiscal_id in (select responsabilidad_fiscal_id from responsabilidad_fiscal_cliente where cliente_id=$1 )";
    public getVehiculos = "select * from vehiculo order by placa";
    
}

export const clienteRepository = new ClienteRepository(); 