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
        this.router.delete('/deleteUsuario/:id',usuarioController.deleteUsuario);
        this.router.post('/createUsuario',usuarioController.createUsuario);
        this.router.put('/updateUsuario/:id',usuarioController.updateUsuario);
    }
}
const usuarioRoutes= new UsuarioRoutes();
export default usuarioRoutes.router;