

class EmpleadoRepository{
    
    public getEmpleadoByAll:string="select * from empleado  where empresa_id = $1";
    public getIdEmpleado:string="select nextval('s_empleado')";
    
    
}

export const empleadoRepository = new EmpleadoRepository();