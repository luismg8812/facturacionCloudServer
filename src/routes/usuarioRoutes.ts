import {Router} from 'express';
import { usuarioController } from '../controllers/usuarioControlles';

class UsuarioRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.get('/opcionUsuarioByUsuario' ,usuarioController.opcionUsuarioByUsuario);
        this.router.get('/usuarioByMail' ,usuarioController.usuarioByMail);
        this.router.get('/getRolByIds' ,usuarioController.getRolByIds);
        this.router.get('/getByUsuario' ,usuarioController.getByUsuario);
        this.router.get('/getRolByUsuario' ,usuarioController.getRolByUsuario);
        this.router.delete('/deleteUsuario/:id',usuarioController.deleteUsuario);
        this.router.post('/createUsuario',usuarioController.createUsuario);
        this.router.post('/createUsuarioMasivo',usuarioController.createUsuarioMasivo);
        this.router.put('/updateUsuario',usuarioController.updateUsuario);
        this.router.get('/getSubMenuAll' ,usuarioController.getSubMenuAll);
        this.router.get('/getActivacionAll' ,usuarioController.getActivacionAll);
        this.router.get('/opcionPuntoVentaByUsuario' ,usuarioController.opcionPuntoVentaByUsuario);
        this.router.get('/opcionUsuarioByUsuarioSinMenu' ,usuarioController.opcionUsuarioByUsuarioSinMenu);
        this.router.get('/getActivacionByUsuario' ,usuarioController.getActivacionByUsuario);
        this.router.get('/getEmpleadoByUsuario' ,usuarioController.getEmpleadoByUsuario);
        this.router.get('/getCamposInventarioByUsuario' ,usuarioController.getCamposInventarioByUsuario);
        this.router.get('/guardarRutas' ,usuarioController.guardarRutas);
        this.router.get('/guardarActivaciones' ,usuarioController.guardarActivaciones);
        this.router.get('/guardarCamposInventario' ,usuarioController.guardarCamposInventario);
        
        this.router.post('/postFile',usuarioController.postFile);
        this.router.get('/getFile' ,usuarioController.getFile);
        this.router.get('/usuarioByRol' ,usuarioController.usuarioByRol);
        this.router.get('/getProporcion' ,usuarioController.getProporcion);
        this.router.get('/getLiberarCuadre' ,usuarioController.getLiberarCuadre);
        this.router.get('/getCampoInventarioAll' ,usuarioController.getCampoInventarioAll);
        this.router.put('/updateProporcion',usuarioController.updateProporcion);
        this.router.post('/saveActivacionUsuario',usuarioController.saveActivacionUsuario);
        this.router.get('/saveEmpleadoUsuario',usuarioController.saveEmpleadoUsuario);
        this.router.get('/getEmpresas',usuarioController.getEmpresas);
        
        this.router.post('/deleteActivacionUsuario',usuarioController.deleteActivacionUsuario);
    }
}
const usuarioRoutes= new UsuarioRoutes();
export default usuarioRoutes.router;