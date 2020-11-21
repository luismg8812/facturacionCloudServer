import {Router} from 'express';
import { bonoControllers } from '../controllers/bonoControllers';

class BonoRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.post('/saveBono' ,bonoControllers.saveBono);
        this.router.post('/updateBono' ,bonoControllers.updateBono);
        this.router.get('/getBonosByEmpresa' ,bonoControllers.getBonosByEmpresa);
        this.router.get('/getTiposBono' ,bonoControllers.getTiposBono);
        this.router.get('/getBonoById' ,bonoControllers.getBonoById);
        
    } 
    
}
const bonoRoutes= new BonoRoutes();
export default bonoRoutes.router;