import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from "./routes/indexRoutes";
import usuarioRoutes from "./routes/usuarioRoutes";
import EmpresaRoutes from './routes/empresaRoutes';
import ClienteRoutes from './routes/clienteRoutes';
import ProductoRoutes from './routes/productoRoutes';
import DocumentoRoutes from './routes/documentoRoutes';
import DocumentoDetalleRoutes from './routes/documentoDetalleRoutes';

class Server{
   public app:Application;

    constructor(){       
        this.app=express();
        this.config();
        this.router();
    }

    config():void{
        this.app.set("port",process.env.PORT ||9090);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    router():void{
        this.app.use(indexRoutes);
        this.app.use('/usuario',usuarioRoutes);
        this.app.use('/empresa',EmpresaRoutes);
        this.app.use('/cliente',ClienteRoutes);
        this.app.use('/producto',ProductoRoutes);
        this.app.use('/documento',DocumentoRoutes);
        this.app.use('/documentoDetalle',DocumentoDetalleRoutes);
    }
    
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log("init by port: ",this.app.get('port'));
        });
    }
}
const server =new Server();
server.start();