import {Router} from 'express';
import { productoControllers } from '../controllers/productoControllers';

class ProductoRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.get('/getProductosByEmpresa' ,productoControllers.getProductosByEmpresa);
    }
}
const productoRoutes= new ProductoRoutes();
export default productoRoutes.router;