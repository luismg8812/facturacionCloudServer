import {Router} from 'express';
import { empresaControllers } from '../controllers/empresaControllers';

class EmpresaRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.get('/pagosEmpresaByEmpresa' ,empresaControllers.pagosEmpresaByEmpresa);
    }
}
const usuarioRoutes= new EmpresaRoutes();
export default usuarioRoutes.router;