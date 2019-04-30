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
const empresaRepository_1 = require("../repository/empresaRepository");
const database_1 = __importDefault(require("../database"));
class EmpresaControllers {
    pagosEmpresaByEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresa_id = req.query.empresa_id;
            console.log(empresa_id);
            const usuario = yield database_1.default.query(empresaRepository_1.empresaRepository.pagosEmpresaByEmpresa, [empresa_id]);
            res.json(usuario.rows);
        });
    }
    getEmpresaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresa_id = req.query.empresa_id;
            console.log(empresa_id);
            const usuario = yield database_1.default.query(empresaRepository_1.empresaRepository.getEmpresaById, [empresa_id]);
            res.json(usuario.rows);
        });
    }
}
exports.empresaControllers = new EmpresaControllers();
