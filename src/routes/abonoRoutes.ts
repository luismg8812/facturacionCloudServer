import {Router} from 'express';
import { abonoControllers } from '../controllers/abonoControllers';

class AbonoRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.post('/saveAbono' ,abonoControllers.saveAbono);
        this.router.get('/getAbonosByDocumento' ,abonoControllers.getAbonosByDocumento);
    } 
    
}
const abonoRoutes= new AbonoRoutes();
export default abonoRoutes.router;