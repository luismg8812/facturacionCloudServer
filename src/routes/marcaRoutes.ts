import { Router } from "express";
import { marcaControllers } from '../controllers/marcaControllers';

class MarcaRoutes{
    
    public router:Router =  Router(); 

    constructor(){
        this.config();
   }

    config():void{
        this.router.get('/getMarcas' ,marcaControllers.getMarcas);
        this.router.get('/getModeloByMarca' ,marcaControllers.getModeloByMarca);
        this.router.get('/getModeloById' ,marcaControllers.getModeloById);
        
       
        
    }
}

const marcaRoutes= new MarcaRoutes();
export default marcaRoutes.router;