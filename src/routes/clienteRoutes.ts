import {Router} from 'express';
import { clienteControllers } from '../controllers/clienteControllers';

class ClienteRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.get('/getClientesByEmpresa' ,clienteControllers.getClientesByEmpresa);
    }
}
const clienteRoutes= new ClienteRoutes();
export default clienteRoutes.router;