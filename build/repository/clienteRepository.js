"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRepository = void 0;
class ClienteRepository {
    constructor() {
        this.getClientesByEmpresa = "select * from cliente where empresa_id = $1";
        this.getConfiguracionByEmpresa = "select * from configuracion where empresa_id = $1";
        this.getById = "select * from cliente where cliente_id = $1";
        this.getTipoPago = "select * from tipo_pago";
        this.getResolucion = "select * from RESOLUCION_EMPRESA where empresa_id = $1 order by resolucion_empresa_id";
        this.getResolucionId = "select * from RESOLUCION_EMPRESA where resolucion_empresa_id = $1 ";
        this.getImpresorasEmpresa = "select * from impresora_empresa where empresa_id = $1 order by numero_impresora";
        this.getIdCliente = "select nextval('s_cliente')";
        this.getIdVehiculo = "select nextval('s_vehiculo')";
        this.getIdResponsabilidadCliente = "select nextval('s_responsabilidad_fiscal_cliente_id')";
        this.getTipoIdentificacionAll = "select * from tipo_identificacion order by tipo_identificacion_id";
        this.getTipoEmpresa = "select * from fact_tipo_empresa order by nombre";
        this.getResponsabilidades = "select * from responsabilidad_fiscal where estado=1 order by codigo";
        this.getResponsabilidadesByCliente = "select * from responsabilidad_fiscal where responsabilidad_fiscal_id in (select responsabilidad_fiscal_id from responsabilidad_fiscal_cliente where cliente_id=$1 )";
        this.getVehiculos = "select * from vehiculo order by placa";
    }
}
exports.clienteRepository = new ClienteRepository();
