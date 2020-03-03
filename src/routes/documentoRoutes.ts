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
        this.router.post('/createDocumentoOrden' ,documentoControllers.createDocumentoOrden);
        this.router.post('/deleteDocumentoOrdenByOrden' ,documentoControllers.deleteDocumentoOrdenByOrden);
        this.router.get('/getDocumentoOrdenById' ,documentoControllers.getDocumentoOrdenById);
        this.router.get('/getOrdenesByDocumentoId' ,documentoControllers.getOrdenesByDocumentoId);
        this.router.get('/getNominaByEmpleado' ,documentoControllers.getNominaByEmpleado);
        this.router.get('/getOrdenesByEmpleado' ,documentoControllers.getOrdenesByEmpleado);
        this.router.post('/cierreNomina' ,documentoControllers.cierreNomina);
        this.router.get('/getTiposDocumento' ,documentoControllers.getTiposDocumento);
        this.router.get('/getDocumentosByFechaAndTipo' ,documentoControllers.getDocumentosByFechaAndTipo);
        
    }
}
const documentoRoutes= new DocumentoRoutes();
export default documentoRoutes.router;