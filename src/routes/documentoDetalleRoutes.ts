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
    }
}
const documentoDetalleRoutes= new DocumentoDetalleRoutes();
export default documentoDetalleRoutes.router;