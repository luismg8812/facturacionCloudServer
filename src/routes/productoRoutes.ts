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
        this.router.put('/inactivar' ,productoControllers.inactivar);
        this.router.put('/updateProducto' ,productoControllers.updateProducto);
        this.router.put('/saveProducto' ,productoControllers.saveProducto);
        
    }
}
const productoRoutes= new ProductoRoutes();
export default productoRoutes.router;