"use strict";
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
const cuentasContablesRoutes_1 = __importDefault(require("./routes/cuentasContablesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.router();
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
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("start by port: ", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
