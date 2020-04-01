import {Router} from 'express';
import { informeDiarioControllers } from '../controllers/informeDiarioControllers';

class InformeDiarioRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.get('/getCierreDiario' ,informeDiarioControllers.getClientesByEmpresa);
        this.router.get('/hacerCierreDiario' ,informeDiarioControllers.hacerCierreDiario);
        this.router.get('/getInfoDiarioByDate' ,informeDiarioControllers.getInfoDiarioByDate);
        this.router.post('/saveInformeDiario' ,informeDiarioControllers.saveInformeDiario);
        this.router.post('/updateInformeDiario' ,informeDiarioControllers.updateInformeDiario);
        
    }
    
}
const informeDiarioRoutes= new InformeDiarioRoutes();
export default informeDiarioRoutes.router;