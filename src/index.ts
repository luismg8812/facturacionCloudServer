import express, { Application } from 'express';
import morgan from 'morgan';
import indexRoutes from "./routes/indexRoutes";
import usuarioRoutes from "./routes/usuarioRoutes";
import empleadoRoutes from "./routes/empleadoRoutes";
import EmpresaRoutes from './routes/empresaRoutes';
import ClienteRoutes from './routes/clienteRoutes';
import ProveedorRoutes from './routes/proveedorRoutes';
import ProductoRoutes from './routes/productoRoutes';
import DocumentoRoutes from './routes/documentoRoutes';
import DocumentoDetalleRoutes from './routes/documentoDetalleRoutes';
import marcaRoutes from './routes/marcaRoutes';
import informeDiarioRoutes from './routes/informeDiarioRoutes';
import apiRoutes from './routes/apiRoutes';
import abonoRoutes from './routes/abonoRoutes';
import bonoRoutes from './routes/bonoRoutes';
import cuentasContablesRoutes from './routes/cuentasContablesRoutes';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.router();
    }

    config(): void {
        this.app.set("port", process.env.PORT || 9090);
        this.app.use(morgan('dev'));
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }

    router(): void {
        this.app.use(indexRoutes);
        this.app.use('/usuario',usuarioRoutes);
        this.app.use('/empresa',EmpresaRoutes);
        this.app.use('/cliente',ClienteRoutes);
        this.app.use('/proveedor',ProveedorRoutes);
        this.app.use('/producto',ProductoRoutes);
        this.app.use('/documento',DocumentoRoutes);
        this.app.use('/documentoDetalle',DocumentoDetalleRoutes);
        this.app.use('/marca',marcaRoutes);
        this.app.use('/informeDiario',informeDiarioRoutes);
        this.app.use('/empleado',empleadoRoutes);
        this.app.use('/api',apiRoutes);
        this.app.use('/abono',abonoRoutes);
        this.app.use('/cuentasContables',cuentasContablesRoutes);
        this.app.use('/bono',bonoRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("start by port: ", this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();