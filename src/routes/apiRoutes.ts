import {Router} from 'express';
import { apiControllers } from '../controllers/apiControllers';

class ApiRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{    
        this.router.post('/sendMail' ,apiControllers.sendMail);       
    }
    
}
const apiRoutes= new ApiRoutes();
export default apiRoutes.router;