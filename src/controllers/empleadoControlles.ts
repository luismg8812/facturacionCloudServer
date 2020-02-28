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

    public async createProductoEmpleado(req: Request, res: Response): Promise<any> {

        var empleado_id = req.body.empleado_id; 
        var concepto_producto = req.body.concepto_producto;
        var valor = req.body.valor;
        var fecha_registro = req.body.fecha_registro;
        var cierre_diario= req.body.cierre_diario;
        console.log(req.body);
        const id = await  db.query(empleadoRepository.getIdProductoEmpleado);
        const producto_empleado_id = id.rows[0].nextval; 
        console.log(producto_empleado_id);
        var query="INSERT INTO producto_empleado(producto_empleado_id,empleado_id,concepto_producto, valor, fecha_registro,cierre_diario) VALUES ($1,$2,$3,$4,$5,$6)";
        await db.query(query, [producto_empleado_id,empleado_id, concepto_producto, valor, fecha_registro,cierre_diario]).then(res2=>{
            res.json({"code":200,"producto_empleado_id":producto_empleado_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"producto_empleado_id":producto_empleado_id});
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
        var pago_empleado_id= req.body.pago_empleado_id;
        var porcentaje_pago= req.body.porcentaje_pago;
        var sueldo= req.body.sueldo;
        var pago_admin= req.body.pago_admin;
        var porcentaje_descuento= req.body.porcentaje_descuento;
        console.log(req.body);
        var query="UPDATE empleado SET  empresa_id=$1, nombre= $2, apellido=$3, telefono=$4,identificacion =$5, estado=$6, pago_empleado_id=$8, porcentaje_pago=$9, sueldo=$10, pago_admin=$11, porcentaje_descuento=$12 WHERE empleado_id = $7";
        await db.query(query, [empresa_id,nombre,apellido,telefono,identificacion,estado,empleado_id,pago_empleado_id,porcentaje_pago,sueldo,pago_admin,porcentaje_descuento]).then(res2=>{
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

    public async getPagosEmpleadosAll(req: Request, res: Response): Promise<any> {
        const rol = await db.query(empleadoRepository.getPagosEmpleadosAll);
        res.json(rol.rows);
    }

    public async getProductoEmpleadoByEmpleado(req:Request, res:Response):Promise<any>{
        const empleadoId = req.query.empleadoId; 
        const fechaInicial = req.query.fechaInicial; 
        const fechaFinal = req.query.fechaFinal;  
        let query:string ="select * from producto_empleado where 1=1 ";
        if(empleadoId!=null){
            query=query+" and empleado_id= "+empleadoId; 
        }
        if(fechaInicial!=''){
            query=query+" and fecha_registro>= '"+fechaInicial+"'";
        }
        if(fechaFinal!=''){
            query=query+" and fecha_registro <= '"+fechaFinal+"'";
           
        }else{
            query=query+" and (cierre_diario=0 or cierre_diario is null)";
        }
        query=query+" order by fecha_registro desc";
        console.log(query);
        const docuemntos = await  db.query(query);       
             res.json(docuemntos.rows);  
    }

    


}

export const empleadoControllers = new EmpleadoControllers();