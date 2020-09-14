import {Router} from 'express';
import { productoControllers } from '../controllers/productoControllers';

class ProductoRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{ 
        this.router.get('/getProductosByEmpresa' ,productoControllers.getProductosByEmpresa);
        this.router.get('/getProductoById' ,productoControllers.getProductoById);
        this.router.get('/getGruposByEmpresa' ,productoControllers.getGruposByEmpresa);
        this.router.get('/getSubGruposByEmpresa' ,productoControllers.getSubGruposByEmpresa);
        
        this.router.put('/updateCantidad' ,productoControllers.updateCantidad);
        this.router.put('/inactivar' ,productoControllers.inactivar);
        this.router.put('/updateProducto' ,productoControllers.updateProducto);
        this.router.put('/updateGrupo' ,productoControllers.updateGrupo);
        this.router.put('/updateSubGrupo' ,productoControllers.updateSubGrupo);
        this.router.put('/saveProducto' ,productoControllers.saveProducto);
        this.router.put('/saveGrupo' ,productoControllers.saveGrupo);
        this.router.put('/saveSubGrupo' ,productoControllers.saveSubGrupo);
        
        this.router.get('/getProductosByGrupo' ,productoControllers.getProductosByGrupo);
        
    }
}
const productoRoutes= new ProductoRoutes();
export default productoRoutes.router;