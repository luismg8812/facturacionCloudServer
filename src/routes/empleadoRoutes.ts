import {Router} from 'express';
import { empleadoControllers } from '../controllers/empleadoControlles';

class EmpleadoRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.get('/empleadoAll' ,empleadoControllers.empleadoAll);
        this.router.post('/createEmpleado',empleadoControllers.createEmpleado);
        this.router.put('/updateEmpleado',empleadoControllers.updateEmpleado);
    }
}
const empleadoRoutes= new EmpleadoRoutes();
export default empleadoRoutes.router;