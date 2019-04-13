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
        });
    }
    getByUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.query.usuario;
            const empresaId = req.query.empresaId;
            const rolId = req.query.rolId;
            console.log(empresaId);
            const usuarioRes = yield database_1.default.query(usuarioRepository_1.usuarioRepository.getByUsuario, [empresaId]);
            res.json(usuarioRes.rows);
        });
    }
    getRolByIds(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.query);
            let ids = req.query.ids;
            var vid2 = ids.split(",");
            console.log(vid2);
            const roles = yield database_1.default.query("select * from rol where rol_id in (" + vid2.toString() + ")");
            res.json(roles.rows);
        });
    }
    opcionUsuarioByUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioId = req.query.usuarioId;
            const menuId = req.query.menuId;
            const opcionUsuario = yield database_1.default.query(usuarioRepository_1.usuarioRepository.opcionUsuarioByUsuario, [usuarioId, menuId]);
            res.json(opcionUsuario.rows);
        });
    }
    opcionUsuarioByUsuarioSinMenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioId = req.query.usuarioId;
            const opcionUsuario = yield database_1.default.query(usuarioRepository_1.usuarioRepository.opcionUsuarioByUsuarioSinMenu, [usuarioId]);
            res.json(opcionUsuario.rows);
        });
    }
    getActivacionByUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioId = req.query.usuarioId;
            const opcionUsuario = yield database_1.default.query(usuarioRepository_1.usuarioRepository.getActivacionByUsuario, [usuarioId]);
            res.json(opcionUsuario.rows);
        });
    }
    deleteUsuario(req, res) {
        res.json({ "delete_usuario": +req.params.id });
    }
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let roles = req.query.rolId.split(",");
            console.log(req.query.rolId);
            delete req.body.usuario_id;
            var empresa_id = req.body.empresa_id;
            var nombre = req.body.nombre;
            var apellido = req.body.apellido;
            var correo = req.body.correo;
            var clave = req.body.clave;
            var fecha_registro = req.body.fecha_registro;
            var identificacion = req.body.identificacion;
            var estado = req.body.estado;
            console.log(req.body);
            yield database_1.default.query("INSERT INTO usuario(empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado) VALUES ($1,$2,$3,$4,$5,$6,$7,$8 )", [empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado]);
            const usuario = yield database_1.default.query(usuarioRepository_1.usuarioRepository.usuarioByMail, [correo]);
            for (let i = 0; i < roles.length; i++) {
                yield database_1.default.query("INSERT INTO rol_usuario(rol_id, usuario_id) VALUES ($1,$2)", [roles[i], usuario.rows[0].usuario_id]);
            }
            console.log("usuario guardo:");
            res.json({ "code": 200, "usuario_id": usuario.rows[0].usuario_id });
        });
    }
    updateUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let roles = req.query.rolId.split(",");
            console.log(req.query.rolId);
            var usuario_id = req.body.usuario_id;
            var empresa_id = req.body.empresa_id;
            var nombre = req.body.nombre;
            var apellido = req.body.apellido;
            var correo = req.body.correo;
            var clave = req.body.clave;
            var fecha_registro = req.body.fecha_registro;
            var identificacion = req.body.identificacion;
            var estado = req.body.estado;
            console.log(req.body);
            yield database_1.default.query("UPDATE usuario set empresa_id=$1, nombre=$2, apellido=$3, correo=$4, clave=$5, fecha_registro=$6, identificacion=$7, estado=$8 where usuario_id=$9", [empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado, usuario_id]);
            const usuario = yield database_1.default.query(usuarioRepository_1.usuarioRepository.deleteRolUsuario, [usuario_id]);
            for (let i = 0; i < roles.length; i++) {
                yield database_1.default.query("INSERT INTO rol_usuario(rol_id, usuario_id) VALUES ($1,$2)", [roles[i], usuario_id]);
            }
            console.log("usuario guardo:");
            res.json({ "code": 200, "usuario_id": usuario_id });
        });
    }
    getRolByUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioId = req.query.usuarioId;
            console.log(usuarioId);
            const rol = yield database_1.default.query(usuarioRepository_1.usuarioRepository.getRolByUsuario, [usuarioId]);
            res.json(rol.rows);
        });
    }
    getSubMenuAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rol = yield database_1.default.query(usuarioRepository_1.usuarioRepository.getSubMenuAll);
            res.json(rol.rows);
        });
    }
}
exports.usuarioController = new UsuarioControllers();
