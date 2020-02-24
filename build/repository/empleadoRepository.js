"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmpleadoRepository {
    constructor() {
        this.getEmpleadoByAll = "select * from empleado  where empresa_id = $1";
        this.getIdEmpleado = "select nextval('s_empleado')";
    }
}
exports.empleadoRepository = new EmpleadoRepository();
