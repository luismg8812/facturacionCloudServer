import {Router} from 'express';
import { clienteControllers } from '../controllers/clienteControllers';

class ClienteRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.get('/getClientesByEmpresa' ,clienteControllers.getClientesByEmpresa);
        this.router.get('/getConfiguracionByEmpresa' ,clienteControllers.getConfiguracionByEmpresa);
        this.router.get('/getTipoPago' ,clienteControllers.getTipoPago);
        this.router.get('/getResolucion' ,clienteControllers.getResolucion);
        this.router.get('/getResolucionById' ,clienteControllers.getResolucionById);
        this.router.get('/getResponsabilidades' ,clienteControllers.getResponsabilidades);
        this.router.get('/getImpresorasEmpresa' ,clienteControllers.getImpresorasEmpresa);
        this.router.post('/saveCliente' ,clienteControllers.saveCliente);
        this.router.post('/saveVehiculo' ,clienteControllers.saveVehiculo);
        
        this.router.post('/saveResponsabilidadFiscalCliente' ,clienteControllers.saveResponsabilidadFiscalCliente);
        this.router.post('/updateCliente' ,clienteControllers.updateCliente);
        this.router.post('/updateVehiculo' ,clienteControllers.updateVehiculo);
        
        this.router.get('/getById' ,clienteControllers.getById);
        this.router.get('/getTipoEmpresa' ,clienteControllers.getTipoEmpresa);
        this.router.get('/getTipoIdentificacionAll' ,clienteControllers.getTipoIdentificacionAll);
        this.router.get('/getResponsabilidadesByCliente' ,clienteControllers.getResponsabilidadesByCliente);
        this.router.get('/getVehiculos' ,clienteControllers.getVehiculos);
        
        
    }
    
}
const clienteRoutes= new ClienteRoutes();
export default clienteRoutes.router;