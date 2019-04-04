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
const usuarioRepository_1 = require("../repository/usuarioRepository");
const database_1 = __importDefault(require("../database"));
class UsuarioControllers {
    usuarioByMail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mail = req.query.mail;
            console.log(mail);
            const usuario = yield database_1.default.query(usuarioRepository_1.usuarioRepository.usuarioByMail, [mail]);
            res.json(usuario.rows);
            res.json({ "messsage": "usuario controller" });
        });
    }
    deleteUsuario(req, res) {
        res.json({ "delete_usuario": +req.params.id });
    }
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //await db.query("insert into usuario set ? ",[req.body]);
            //res.json({"message:"user saved"});
        });
    }
    updateUsuario(req, res) {
        res.json({ "update_usuario": +req.params.id });
    }
}
exports.usuarioController = new UsuarioControllers();
