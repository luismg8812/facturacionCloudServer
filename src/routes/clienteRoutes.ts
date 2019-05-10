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
        this.router.get('/getImpresorasEmpresa' ,clienteControllers.getImpresorasEmpresa);
        
        
    }
    
}
const clienteRoutes= new ClienteRoutes();
export default clienteRoutes.router;