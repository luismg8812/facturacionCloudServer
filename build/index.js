"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const empresaRoutes_1 = __importDefault(require("./routes/empresaRoutes"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const productoRoutes_1 = __importDefault(require("./routes/productoRoutes"));
const documentoRoutes_1 = __importDefault(require("./routes/documentoRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.router();
    }
    config() {
        this.app.set("port", process.env.PORT || 9090);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    router() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/usuario', usuarioRoutes_1.default);
        this.app.use('/empresa', empresaRoutes_1.default);
        this.app.use('/cliente', clienteRoutes_1.default);
        this.app.use('/producto', productoRoutes_1.default);
        this.app.use('/documento', documentoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("init by port: ", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
