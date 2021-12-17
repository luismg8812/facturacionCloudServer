import {Router} from 'express';
import { abonoControllers } from '../controllers/abonoControllers';
import { controlInventarioControllers } from '../controllers/cotrolInventarioControllers';

class ControlInventarioRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.get('/getControlInventario' ,controlInventarioControllers.getControlInventario);
        this.router.get('/getControlInventarioByProductoId' ,controlInventarioControllers.getControlInventarioByProductoId);
        this.router.post('/updateControlInventario' ,controlInventarioControllers.updateControlInventario);
    } 
    
}
const controlInventarioRoutes= new ControlInventarioRoutes();
export default controlInventarioRoutes.router;