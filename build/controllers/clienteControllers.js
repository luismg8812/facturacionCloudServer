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
const clienteRepository_1 = require("../repository/clienteRepository");
const database_1 = __importDefault(require("../database"));
class ClienteControllers {
    getClientesByEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            const opcionUsuario = yield database_1.default.query(clienteRepository_1.clienteRepository.getClientesByEmpresa, [empresaId]);
            res.json(opcionUsuario.rows);
        });
    }
    getImpresorasEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            const impresoraEmpresa = yield database_1.default.query(clienteRepository_1.clienteRepository.getImpresorasEmpresa, [empresaId]);
            res.json(impresoraEmpresa.rows);
        });
    }
    getConfiguracionByEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            const configuracion = yield database_1.default.query(clienteRepository_1.clienteRepository.getConfiguracionByEmpresa, [empresaId]);
            res.json(configuracion.rows);
        });
    }
    getTipoPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoPago = yield database_1.default.query(clienteRepository_1.clienteRepository.getTipoPago);
            res.json(tipoPago.rows);
        });
    }
}
exports.clienteControllers = new ClienteControllers();
