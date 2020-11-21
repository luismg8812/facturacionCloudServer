import {Router} from 'express';
import { proveedorControllers } from '../controllers/proveedorControllers';

class ProveedorRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }
    
    config():void{
        this.router.get('/getProveedoresByEmpresa' ,proveedorControllers.getProveedoresByEmpresa);  
        this.router.post('/saveProveedor' ,proveedorControllers.saveProveedor);
        this.router.post('/updateProveedor' ,proveedorControllers.updateProveedor);    
    }
    
}
const proveedorRoutes= new ProveedorRoutes();
export default proveedorRoutes.router;