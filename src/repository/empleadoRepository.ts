

class EmpleadoRepository{
    public getEmpleadoByAll:string="select * from empleado  where empresa_id = $1";
    public getIdEmpleado:string="select nextval('s_empleado')";
    public getIdProductoEmpleado:string="select nextval('s_producto_empleado')";
    public getPagosEmpleadosAll:string="select * from pago_empleado  order by nombre";
}

export const empleadoRepository = new EmpleadoRepository();