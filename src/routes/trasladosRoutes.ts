import {Router} from 'express';
import { trasladosControllers } from '../controllers/trasladosControllers';

class TrasladosRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{ 
        this.router.put('/saveRequerimiento' ,trasladosControllers.saveRequerimiento);
        this.router.put('/saveTraslado' ,trasladosControllers.saveTraslado);
        this.router.put('/saveRequerimientoDetalle' ,trasladosControllers.saveRequerimientoDetalle);
        this.router.put('/saveTrasladoDetalle' ,trasladosControllers.saveTrasladoDetalle);
        this.router.put('/updateRequerimiento' ,trasladosControllers.updateRequerimiento);
        this.router.put('/updateTraslado' ,trasladosControllers.updateTraslado);
        this.router.get('/getRequerimientos' ,trasladosControllers.getRequerimientos);
        this.router.get('/getTraslados' ,trasladosControllers.getTraslados);
        this.router.get('/getRequerimientoDetalleByRequerimientoId' ,trasladosControllers.getRequerimientoDetalleByRequerimientoId);
        this.router.put('/deleteRequerimientoDetalle' ,trasladosControllers.deleteRequerimientoDetalle);
        this.router.put('/deleteTrasladoDetalle' ,trasladosControllers.deleteTrasladoDetalle);
        this.router.get('/getTrasladoDetalleByTrasladoId' ,trasladosControllers.getTrasladoDetalleByTrasladoId);
        this.router.get('/getRequerimientoById' ,trasladosControllers.getRequerimientoById);
        this.router.get('/getRequerimientoDetalleByRequerimientoIdList' ,trasladosControllers.getRequerimientoDetalleByRequerimientoIdList);
        
    } 
    
}
const trasladosRoutes= new TrasladosRoutes();
export default trasladosRoutes.router;