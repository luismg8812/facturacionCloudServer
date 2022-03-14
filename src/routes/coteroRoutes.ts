import {Router} from 'express';
import { coteroControllers } from '../controllers/coteroControllers';

class CoteroRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.put('/saveCotero' ,coteroControllers.saveCotero);
        this.router.post('/updateCotero' ,coteroControllers.updateCotero);
        this.router.get('/getCoteros' ,coteroControllers.getCoteros);
    } 
    
}
const coteroRoutes= new CoteroRoutes();
export default coteroRoutes.router;