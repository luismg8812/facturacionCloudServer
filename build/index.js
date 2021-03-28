"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const empleadoRoutes_1 = __importDefault(require("./routes/empleadoRoutes"));
const empresaRoutes_1 = __importDefault(require("./routes/empresaRoutes"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const proveedorRoutes_1 = __importDefault(require("./routes/proveedorRoutes"));
const productoRoutes_1 = __importDefault(require("./routes/productoRoutes"));
const documentoRoutes_1 = __importDefault(require("./routes/documentoRoutes"));
const documentoDetalleRoutes_1 = __importDefault(require("./routes/documentoDetalleRoutes"));
const marcaRoutes_1 = __importDefault(require("./routes/marcaRoutes"));
const informeDiarioRoutes_1 = __importDefault(require("./routes/informeDiarioRoutes"));
const apiRoutes_1 = __importDefault(require("./routes/apiRoutes"));
const abonoRoutes_1 = __importDefault(require("./routes/abonoRoutes"));
const bonoRoutes_1 = __importDefault(require("./routes/bonoRoutes"));
const trasladosRoutes_1 = __importDefault(require("./routes/trasladosRoutes"));
const cuentasContablesRoutes_1 = __importDefault(require("./routes/cuentasContablesRoutes"));
const database_1 = __importDefault(require("./database"));
const database_license_1 = __importDefault(require("./database_license"));
const controlInventarioRoutes_1 = __importDefault(require("./routes/controlInventarioRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.router();
        this.validarLisencia();
    }
    config() {
        this.app.set("port", process.env.PORT || 9090);
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json({ limit: '50mb' }));
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }
    router() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/usuario', usuarioRoutes_1.default);
        this.app.use('/empresa', empresaRoutes_1.default);
        this.app.use('/cliente', clienteRoutes_1.default);
        this.app.use('/proveedor', proveedorRoutes_1.default);
        this.app.use('/producto', productoRoutes_1.default);
        this.app.use('/documento', documentoRoutes_1.default);
        this.app.use('/documentoDetalle', documentoDetalleRoutes_1.default);
        this.app.use('/marca', marcaRoutes_1.default);
        this.app.use('/informeDiario', informeDiarioRoutes_1.default);
        this.app.use('/empleado', empleadoRoutes_1.default);
        this.app.use('/api', apiRoutes_1.default);
        this.app.use('/abono', abonoRoutes_1.default);
        this.app.use('/cuentasContables', cuentasContablesRoutes_1.default);
        this.app.use('/bono', bonoRoutes_1.default);
        this.app.use('/traslados', trasladosRoutes_1.default);
        this.app.use('/controlInventario', controlInventarioRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("start by port: ", this.app.get('port'));
        });
    }
    validarLisencia() {
        return __awaiter(this, void 0, void 0, function* () {
            const empresa = yield database_1.default.query("select * from empresa where empresa_id =1");
            const resolucion = yield database_1.default.query("select * from resolucion_empresa where empresa_id =1 and resolucion_empresa_id =1");
            console.log(empresa.rows[0]);
            console.log(resolucion.rows[0]);
            if (empresa.rows[0].identificador == undefined || empresa.rows[0].identificador == null) {
                console.log("bloq empresa por identificador");
                yield database_1.default.query("UPDATE configuracion set server=0 ");
                yield database_1.default.query("UPDATE empresa set esatado_empresa_id=2 ");
                return;
            }
            try {
                let bloq = 0;
                let empr = empresa.rows[0];
                let reso = resolucion.rows[0];
                const estado_empresa = yield database_license_1.default.query("select * from estado_empresa where identificador = " + empresa.rows[0].identificador);
                console.log(estado_empresa.rows);
                let es = estado_empresa.rows[0];
                if (es.activar == 0) {
                    if (es.nombre != empr.nombre) {
                        console.log("bloq by name");
                        bloq = 1;
                    }
                    if (es.representante != empr.representante) {
                        console.log("bloq by representante");
                        bloq = 1;
                    }
                    if (es.nit != empr.nit) {
                        console.log("bloq by nit");
                        bloq = 1;
                    }
                    if (es.regimen != empr.regimen) {
                        console.log("bloq by regimen");
                        bloq = 1;
                    }
                    if (es.direccion != empr.direccion) {
                        console.log("bloq by direccion");
                        bloq = 1;
                    }
                    if (es.resolucion_dian != reso.resolucion_dian) {
                        console.log("bloq by resolucion_dian");
                        bloq = 1;
                    }
                    if (es.letra_consecutivo != reso.letra_consecutivo) {
                        console.log("bloq by letra_consecutivo");
                        bloq = 1;
                    }
                    if (es.autorizacion_hasta != reso.autorizacion_hasta) {
                        console.log("bloq by autorizacion_hasta");
                        bloq = 1;
                    }
                    if (es.estado != 1) {
                        console.log("bloq by estado");
                        bloq = 1;
                    }
                    if (bloq == 1) {
                        console.log("bloq empresa");
                        yield database_1.default.query("UPDATE configuracion set server=0 ");
                        yield database_1.default.query("UPDATE empresa set estado_empresa_id=2 ");
                    }
                }
                else {
                    yield database_1.default.query("UPDATE configuracion set server=1 ");
                }
            }
            catch (error) {
                console.error("error conexion lisencia");
                console.log("bloq company  by web conection");
                yield database_1.default.query("UPDATE configuracion set server=0 ");
                yield database_1.default.query("UPDATE empresa set estado_empresa_id=2 ");
            }
        });
    }
}
const server = new Server();
server.start();
