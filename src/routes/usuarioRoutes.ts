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
        this.router.put('/updateUsuario',usuarioController.updateUsuario);
        this.router.get('/getSubMenuAll' ,usuarioController.getSubMenuAll);
        this.router.get('/getActivacionAll' ,usuarioController.getActivacionAll);
        this.router.get('/opcionPuntoVentaByUsuario' ,usuarioController.opcionPuntoVentaByUsuario);
        this.router.get('/opcionUsuarioByUsuarioSinMenu' ,usuarioController.opcionUsuarioByUsuarioSinMenu);
        this.router.get('/getActivacionByUsuario' ,usuarioController.getActivacionByUsuario);
        this.router.get('/guardarRutas' ,usuarioController.guardarRutas);
        this.router.get('/guardarActivaciones' ,usuarioController.guardarActivaciones);
        this.router.post('/postFile',usuarioController.postFile);
        this.router.get('/getFile' ,usuarioController.getFile);
        
        
    }
}
const usuarioRoutes= new UsuarioRoutes();
export default usuarioRoutes.router;