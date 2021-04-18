import {Router} from 'express';
import { indexControllers } from '../controllers/indexControlles';

class IndexRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.get('/',indexControllers.index);
        this.router.get('/validarLisencia',indexControllers.validarLisencia);
    }
}
const indexRoutes= new IndexRoutes();
export default indexRoutes.router;