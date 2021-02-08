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
import trasladosRoutes from './routes/trasladosRoutes';
import cuentasContablesRoutes from './routes/cuentasContablesRoutes';
import db from './database';
import db_license from './database_license';


class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.router();
        this.validarLisencia();
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
        this.app.use('/traslados',trasladosRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("start by port: ", this.app.get('port'));
        });
    }

    async validarLisencia(){
        const empresa = await db.query("select * from empresa where empresa_id =1");  
        const resolucion = await db.query("select * from resolucion_empresa where empresa_id =1");  
        console.log(empresa.rows[0]);
        console.log(resolucion.rows[0]);
        if(empresa.rows[0].identificador==undefined){     
            console.log("bloq empresa");
            await db.query("UPDATE configuracion set server=0 ");
            return;
        }       
        try {
            let bloq=0;
            let empr= empresa.rows[0];
            let reso=resolucion.rows[0];
            const estado_empresa =await db_license.query("select * from estado_empresa where identificador = "+ empresa.rows[0].identificador );        
            console.log(estado_empresa.rows);
            let es=estado_empresa.rows[0];
            if(es.activar==0){
                if(es.nombre!=empr.nombre){
                    console.log("bloq by name");
                    bloq=1;
                }
                if(es.representante!=empr.representante){
                    console.log("bloq by representante");
                    bloq=1;
                }
                if(es.nit!=empr.nit){
                    console.log("bloq by nit");
                    bloq=1;
                }
                if(es.regimen!=empr.regimen){
                    console.log("bloq by regimen");
                    bloq=1;
                }
                if(es.direccion!=empr.direccion){
                    console.log("bloq by direccion");
                    bloq=1;
                }
                if(es.resolucion_dian!=reso.resolucion_dian){
                    console.log("bloq by resolucion_dian");
                    bloq=1;
                }
                if(es.letra_consecutivo!=reso.letra_consecutivo){
                    console.log("bloq by letra_consecutivo");
                    bloq=1;
                }
                if(es.autorizacion_hasta!=reso.autorizacion_hasta){
                    console.log("bloq by autorizacion_hasta");
                    bloq=1;
                }
                if(es.estado!=1){
                    console.log("bloq by estado");
                    bloq=1;
                }
                if(bloq==1){
                    console.log("bloq empresa");
                    await db.query("UPDATE configuracion set server=0 ");
                }
            }else{
                await db.query("UPDATE configuracion set server=1 ");
            }
            
        } catch (error) {
            console.error("error conexion lisencia");
        }

    }
}

const server = new Server();
server.start();