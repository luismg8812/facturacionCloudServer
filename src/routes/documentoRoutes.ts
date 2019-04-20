import {Router} from 'express';
import { documentoControllers } from '../controllers/documentoControllers';

class DocumentoRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.post('/createDocumento' ,documentoControllers.createDocumento);
    }
}
const documentoRoutes= new DocumentoRoutes();
export default documentoRoutes.router;