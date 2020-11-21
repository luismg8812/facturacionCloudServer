import {Request,Response} from 'express';
import { clienteRepository } from '../repository/clienteRepository';
import db  from '../database';


class ClienteControllers{
    public async getClientesByEmpresa(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const opcionUsuario = await  db.query(clienteRepository.getClientesByEmpresa,[empresaId]);       
             res.json(opcionUsuario.rows);  
    }

    public async getImpresorasEmpresa(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const impresoraEmpresa = await  db.query(clienteRepository.getImpresorasEmpresa,[empresaId]);       
             res.json(impresoraEmpresa.rows);  
    }

    public async getVehiculos(req:Request, res:Response):Promise<any>{
        const impresoraEmpresa = await  db.query(clienteRepository.getVehiculos);       
             res.json(impresoraEmpresa.rows);  
    }

    

    public async saveResponsabilidadFiscalCliente (req:Request, res:Response):Promise<any>{            
        let cliente_id=req.body.cliente_id;
        let responsabilidad_fiscal_id=req.body.responsabilidad_fiscal_id;  
        console.log(req.body);
        const id = await  db.query(clienteRepository.getIdResponsabilidadCliente);
        const responsabilidad_fiscal_cliente_id = id.rows[0].nextval; 
        console.log(responsabilidad_fiscal_cliente_id);
        await db.query("delete from responsabilidad_fiscal_cliente where cliente_id=$1 ", [cliente_id]);
        var query="INSERT INTO responsabilidad_fiscal_cliente(responsabilidad_fiscal_cliente_id,cliente_id,responsabilidad_fiscal_id) VALUES ($1,$2,$3)";
        await db.query(query, [responsabilidad_fiscal_cliente_id,cliente_id,responsabilidad_fiscal_id]).then(res2=>{
            res.json({"code":200,"responsabilidad_fiscal_cliente_id":responsabilidad_fiscal_cliente_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"responsabilidad_fiscal_cliente_id":responsabilidad_fiscal_cliente_id});
        });
    }  
      
    public async saveCliente (req:Request, res:Response):Promise<any>{            
        let nombre=req.body.nombre;
        let razon_social=req.body.razon_social;
        let apellidos=req.body.apellidos;
        let documento=req.body.documento;
        let barrio=req.body.barrio;
        let direccion=req.body.direccion;
        let celular=req.body.celular;
        let fijo=req.body.fijo;
        let fecha_registro=req.body.fecha_registro;
        let credito_activo=req.body.credito_activo;
        let mail=req.body.mail;
        let digito_verificacion=req.body.digito_verificacion;
        let empresa_id=req.body.empresa_id;
        let tipo_identificacion_id=req.body.tipo_identificacion_id;
        let segundo_nombre=req.body.segundo_nombre;
        let segundo_apellido=req.body.segundo_apellido;
        let fact_tipo_empresa_id=req.body.fact_tipo_empresa_id;  
        console.log(req.body);
        const id = await  db.query(clienteRepository.getIdCliente);
        const cliente_id = id.rows[0].nextval; 
        console.log(cliente_id);
        var query="INSERT INTO cliente(cliente_id,nombre, apellidos, documento, barrio,direccion, celular, fijo, fecha_registro, credito_activo,mail,empresa_id,tipo_identificacion_id,segundo_nombre,segundo_apellido,fact_tipo_empresa_id,razon_social,digito_verificacion) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)";
        await db.query(query, [cliente_id,nombre, apellidos, documento, barrio,direccion, celular, fijo, fecha_registro, credito_activo,mail,empresa_id,tipo_identificacion_id,segundo_nombre,segundo_apellido,fact_tipo_empresa_id,razon_social,digito_verificacion]).then(res2=>{
            res.json({"code":200,"cliente_id":cliente_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"cliente_id":cliente_id});
        });
    }  

    public async saveVehiculo (req:Request, res:Response):Promise<any>{            
        let cliente_id=req.body.cliente_id;
        let marca_vehiculo_id=req.body.marca_vehiculo_id;
        let modelo_marca_id=req.body.modelo_marca_id;
        let placa=req.body.placa;
        let linea_vehiculo=req.body.linea_vehiculo;
        console.log(req.body);
        const id = await  db.query(clienteRepository.getIdVehiculo);
        const vehiculo_id = id.rows[0].nextval; 
        console.log(vehiculo_id);
        var query="INSERT INTO vehiculo (vehiculo_id,marca_vehiculo_id, modelo_marca_id, placa, linea_vehiculo,cliente_id) VALUES ($1,$2,$3,$4,$5,$6)";
        await db.query(query, [vehiculo_id,marca_vehiculo_id, modelo_marca_id, placa, linea_vehiculo,cliente_id]).then(res2=>{
            res.json({"code":200,"vehiculo_id":vehiculo_id});
        }).catch(error=>{
            console.error(error);
            res.json({"code":400,"vehiculo_id":vehiculo_id});
        });
    }  

    
    
    public async updateVehiculo(req: Request, res: Response): Promise<any> {
        let vehiculo_id=req.body.vehiculo_id;
        let cliente_id=req.body.cliente_id;
        let marca_vehiculo_id=req.body.marca_vehiculo_id;
        let modelo_marca_id=req.body.modelo_marca_id;
        let placa=req.body.placa;
        let linea_vehiculo=req.body.linea_vehiculo;
        console.log(req.body);
        var query = "UPDATE vehiculo SET  cliente_id=$1, marca_vehiculo_id= $2, modelo_marca_id=$3, placa=$4, linea_vehiculo=$5 WHERE vehiculo_id = $6";
        console.log(query);
        await db.query(query, [cliente_id, marca_vehiculo_id, modelo_marca_id, placa, linea_vehiculo, vehiculo_id]).then(res2 => {
            res.json({ "code": 200, "vehiculo_id": vehiculo_id });
        }).catch(error => {
            console.error(error);
            res.json({ "code": 400, "vehiculo_id": vehiculo_id, "error": error.error });
        });
    }

    public async updateCliente(req: Request, res: Response): Promise<any> {
        let cliente_id=req.body.cliente_id;
        let nombre=req.body.nombre;
        let apellidos=req.body.apellidos;
        let documento=req.body.documento;
        let barrio=req.body.barrio;
        let direccion=req.body.direccion;
        let razon_social=req.body.razon_social;
        let digito_verificacion=req.body.digito_verificacion;
        let celular=req.body.celular;
        let fijo=req.body.fijo;
        let fecha_registro=req.body.fecha_registro;
        let credito_activo=req.body.credito_activo;
        let mail=req.body.mail;
        let empresa_id=req.body.empresa_id;
        let tipo_identificacion_id=req.body.tipo_identificacion_id;
        let segundo_nombre=req.body.segundo_nombre;
        let segundo_apellido=req.body.segundo_apellido;
        let fact_tipo_empresa_id=req.body.fact_tipo_empresa_id;
        console.log(req.body);
        var query = "UPDATE cliente SET  nombre=$1, apellidos= $2, documento=$3, barrio=$4, direccion=$5, celular=$6, fijo=$7, fecha_registro=$8,credito_activo=$9,mail=$10,empresa_id=$11,tipo_identificacion_id=$12,segundo_nombre=$13,segundo_apellido=$14, fact_tipo_empresa_id=$16,razon_social=$17,digito_verificacion=$18  WHERE cliente_id = $15";
        console.log(query);
        await db.query(query, [nombre, apellidos, documento, barrio, direccion, celular, fijo, fecha_registro, credito_activo, mail, empresa_id, tipo_identificacion_id, segundo_nombre, segundo_apellido, cliente_id,fact_tipo_empresa_id,razon_social,digito_verificacion]).then(res2 => {
            res.json({ "code": 200, "cliente_id": cliente_id });
        }).catch(error => {
            console.error(error);
            res.json({ "code": 400, "cliente_id": cliente_id, "error": error.error });
        });
    }

    public async getConfiguracionByEmpresa(req:Request, res:Response):Promise<any>{
        const empresaId = req.query.empresaId; 
        const configuracion = await  db.query(clienteRepository.getConfiguracionByEmpresa,[empresaId]);       
             res.json(configuracion.rows);  
    }

    public async getResponsabilidadesByCliente(req:Request, res:Response):Promise<any>{
        const clienteId = req.query.clienteId; 
        const configuracion = await  db.query(clienteRepository.getResponsabilidadesByCliente,[clienteId]);       
             res.json(configuracion.rows);  
    }

    public async getTipoPago(req:Request, res:Response):Promise<any>{  
        const tipoPago = await  db.query(clienteRepository.getTipoPago);              
        res.json(tipoPago.rows);  
    }

    public async getResolucion(req:Request, res:Response):Promise<any>{  
        const empresaId = req.query.empresaId; 
        const tipoPago = await  db.query(clienteRepository.getResolucion,[empresaId]);              
        res.json(tipoPago.rows);  
    }

    public async getResolucionById(req:Request, res:Response):Promise<any>{  
        const resolucionEmpresaId = req.query.resolucionEmpresaId; 
        const resoulucion = await  db.query(clienteRepository.getResolucionId,[resolucionEmpresaId]);              
        res.json(resoulucion.rows);  
    }

    public async getResponsabilidades(req:Request, res:Response):Promise<any>{  
        const responsabilidades = await  db.query(clienteRepository.getResponsabilidades);              
        res.json(responsabilidades.rows);  
    }

    public async getTipoIdentificacionAll(req:Request, res:Response):Promise<any>{  
        const tipoIdentificacion = await  db.query(clienteRepository.getTipoIdentificacionAll);              
        res.json(tipoIdentificacion.rows);  
    }

    public async getTipoEmpresa(req:Request, res:Response):Promise<any>{  
        const tipoIdentificacion = await  db.query(clienteRepository.getTipoEmpresa);              
        res.json(tipoIdentificacion.rows);  
    }

    

    
}
export const clienteControllers = new ClienteControllers();