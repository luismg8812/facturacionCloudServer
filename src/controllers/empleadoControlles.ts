import { Request, Response } from 'express';
import { empleadoRepository } from '../repository/empleadoRepository';
import db from '../database';

class EmpleadoControllers {
   
    public async createEmpleado(req: Request, res: Response): Promise<any> {

        var empresa_id = req.body.empresa_id;
        var nombre = req.body.nombre;
        var apellido = req.body.apellido;
        var telefono = req.body.telefono;
        var identificacion = req.body.identificacion;
        var estado = req.body.estado;
        console.log(req.body);
        const id = await  db.query(empleadoRepository.getIdEmpleado);
        const empleado_id = id.rows[0].nextval; 
        console.log(empleado_id);
        var query="INSERT INTO empleado(empleado_id,nombre, apellido, telefono, identificacion,estado,empresa_id) VALUES ($1,$2,$3,$4,$5,$6,$7)";
        await db.query(query, [empleado_id,nombre, apellido, telefono, identificacion,estado,empresa_id]).then(res2=>{
            res.json({"code":200,"empleado_id":empleado_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"empleado_id":empleado_id});
        });
    }

    public async updateEmpleado(req: Request, res: Response): Promise<any> {

        var empresa_id = req.body.empresa_id;
        var nombre = req.body.nombre;
        var apellido = req.body.apellido;
        var telefono = req.body.telefono;
        var identificacion = req.body.identificacion;
        var estado = req.body.estado;
        var empleado_id = req.body.empleado_id;
        console.log(req.body);
        var query="UPDATE empleado SET  empresa_id=$1, nombre= $2, apellido=$3, telefono=$4,identificacion =$5, estado=$6 WHERE empleado_id = $7";
        await db.query(query, [empresa_id,nombre,apellido,telefono,identificacion,estado,empleado_id]).then(res2=>{
            res.json({"code":200,"empleado_id":empleado_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"empleado_id":empleado_id,"error":error.error});
        });
    }

    public async empleadoAll(req: Request, res: Response): Promise<any> {
        const empresaId = req.query.empresaId;
        const rol = await db.query(empleadoRepository.getEmpleadoByAll,[empresaId]);
        res.json(rol.rows);
    }


}

export const empleadoControllers = new EmpleadoControllers();