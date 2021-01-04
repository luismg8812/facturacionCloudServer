import {Router} from 'express';
import { trasladosControllers } from '../controllers/trasladosControllers';

class TrasladosRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.put('/saveRequerimiento' ,trasladosControllers.saveRequerimiento);
        this.router.put('/saveRequerimientoDetalle' ,trasladosControllers.saveRequerimientoDetalle);
        this.router.put('/updateRequerimiento' ,trasladosControllers.updateRequerimiento);
        this.router.get('/getRequerimientos' ,trasladosControllers.getRequerimientos);
        this.router.get('/getRequerimientoDetalleByRequerimientoId' ,trasladosControllers.getRequerimientoDetalleByRequerimientoId);
        this.router.put('/deleteRequerimientoDetalle' ,trasladosControllers.deleteRequerimientoDetalle);
        
        
    } 
    
}
const trasladosRoutes= new TrasladosRoutes();
export default trasladosRoutes.router;