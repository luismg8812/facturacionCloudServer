import {Router} from 'express';
import { productoControllers } from '../controllers/productoControllers';

class ProductoRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{ 
        this.router.get('/getProductosByEmpresa' ,productoControllers.getProductosByEmpresa);
        this.router.get('/getProductoById' ,productoControllers.getProductoById);
        this.router.put('/updateCantidad' ,productoControllers.updateCantidad);
        
        
    }
}
const productoRoutes= new ProductoRoutes();
export default productoRoutes.router;