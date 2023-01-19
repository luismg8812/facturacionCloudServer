import {Router} from 'express';
import { clienteControllers } from '../controllers/clienteControllers';
import { documentoDetalleControllers } from '../controllers/documentoDetalleControllers';

class DocumentoDetalleRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }  

    config():void{
        this.router.post('/createDocumentoDetalle' ,documentoDetalleControllers.createDocumentoDetalle);
        this.router.post('/updateDocumentoDetalle' ,documentoDetalleControllers.updateDocumentoDetalle);
        this.router.get('/getDocumentoDetalleByDocumento' ,documentoDetalleControllers.getDocumentoDetalleByDocumento);
        this.router.get('/getDocumentoDetalleByDocumentoList' ,documentoDetalleControllers.getDocumentoDetalleByDocumentoList);
        this.router.get('/getDocumentosByFechaAndTipo' ,documentoDetalleControllers.getDocumentosByFechaAndTipo);    
        this.router.get('/getKardex' ,documentoDetalleControllers.getKardex);    
        this.router.get('/getDetalleExterno' ,documentoDetalleControllers.getDetalleExterno);    
        
    }
} 
const documentoDetalleRoutes= new DocumentoDetalleRoutes();
export default documentoDetalleRoutes.router;