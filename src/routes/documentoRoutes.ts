import {Router} from 'express';
import { documentoControllers } from '../controllers/documentoControllers';

class DocumentoRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.post('/createDocumento' ,documentoControllers.createDocumento);
        this.router.post('/updateDocumento' ,documentoControllers.updateDocumento);
        this.router.post('/createTipoPagoDocumento' ,documentoControllers.createTipoPagoDocumento);
        this.router.get('/getDocumentoByTipo' ,documentoControllers.getDocumentoByTipo);
        this.router.get('/getCuadreCaja' ,documentoControllers.getCuadreCaja);
        this.router.get('/getOrdenesTrabajo' ,documentoControllers.getOrdenesTrabajo);
        
        
    }
}
const documentoRoutes= new DocumentoRoutes();
export default documentoRoutes.router;