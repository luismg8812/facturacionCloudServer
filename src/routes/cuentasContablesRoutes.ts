import {Router} from 'express';
import { abonoControllers } from '../controllers/abonoControllers';
import { cuentasContablesControllers } from '../controllers/cuentasContablesControllers';

class CuentasContablesRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.post('/saveAbono' ,abonoControllers.saveAbono);
        this.router.get('/getClasesContables' ,cuentasContablesControllers.getClasesContables);
        this.router.get('/getGrupoByClase' ,cuentasContablesControllers.getGrupoByClase);
        this.router.get('/getCuentaByGrupo' ,cuentasContablesControllers.getCuentaByGrupo);
        
    } 
    
}
const cuentasContablesRoutes= new CuentasContablesRoutes();
export default cuentasContablesRoutes.router;