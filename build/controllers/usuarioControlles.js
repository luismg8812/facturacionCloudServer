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
    usuarioByRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            const rolId = req.query.rolId;
            const tipoDocumentoId = req.query.tipoDocumentoId;
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            console.log(req.query);
            let query = "select  usuario.nombre, sum(documento.total) total, count(*) num from rol_usuario, usuario, documento " +
                " where rol_usuario.usuario_id=usuario.usuario_id " +
                " and usuario.usuario_id = documento.usuario_id " +
                " and usuario.empresa_id = " + empresaId +
                " and rol_id= " + rolId +
                " and documento.tipo_documento_id= " + tipoDocumentoId +
                " and documento.impreso=1" +
                " and DATE(documento.fecha_registro) BETWEEN TO_TIMESTAMP('" + fechaInicial + "', 'DD-MM-YYYY') and TO_TIMESTAMP('" + fechaFinal + "', 'DD-MM-YYYY')" +
                " GROUP by usuario.nombre";
            console.log(query);
            const usuarioRes = yield database_1.default.query(query);
            res.json(usuarioRes.rows);
        });
    }
    getProporcion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            console.log(req.query);
            let query = "select * from proporcion where empresa_id = " + empresaId;
            console.log(query);
            const usuarioRes = yield database_1.default.query(query);
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
    opcionPuntoVentaByUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioId = req.query.usuarioId;
            const opcionUsuario = yield database_1.default.query(usuarioRepository_1.usuarioRepository.opcionPuntoVentaByUsuario, [usuarioId]);
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
    getFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nombre = req.query.nombre;
            if (nombre == null) {
                res.json("");
            }
            else {
                var contents = require("fs").readFileSync("resources/img/" + nombre);
                new Buffer(contents).toString('base64');
                res.json(new Buffer(contents).toString('base64'));
                // console.log(new Buffer(contents).toString('base64'));
                //this.downloadURLLocal = reader.result;
            }
        });
    }
    postFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            let file = req.body;
            //console.log(file);
            var base64Data = req.body.foto.replace(/^data:image\/png;base64,/, "");
            require("fs").writeFile("resources/img/" + req.body.nombre, base64Data, 'base64', function (err) {
                console.log(err);
            });
            res.json({ "code": 200, "usuario_id": "cualquier mk" });
        });
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
    createUsuarioMasivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let usuarios = req.body;
            usuarios.forEach((usuario) => __awaiter(this, void 0, void 0, function* () {
                var usuario_id = usuario.usuario_id;
                var empresa_id = usuario.empresa_id;
                var nombre = usuario.nombre;
                var apellido = usuario.apellido;
                var correo = usuario.correo;
                var clave = usuario.clave;
                var fecha_registro = usuario.fecha_registro;
                var identificacion = usuario.identificacion;
                var estado = usuario.estado;
                var tipoVinculacion = usuario.tipoVinculacion;
                var supervisor = usuario.supervisor;
                var area = usuario.area;
                var sede = usuario.sede;
                var puesto = usuario.puesto;
                if (usuario_id == 0 || usuario_id == "") {
                    yield database_1.default.query("INSERT INTO usuario(empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado, tipo_vinculacion, supervisor, area, sede, puesto) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13 )", [empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado, tipoVinculacion, supervisor, area, sede, puesto]);
                }
                else {
                    yield database_1.default.query("UPDATE usuario set empresa_id=$1, nombre=$2, apellido=$3, correo=$4, clave=$5, fecha_registro=$6, identificacion=$7, estado=$8, tipo_vinculacion=$9, supervisor=$10, area=$11, sede=$12, puesto=$13 where usuario_id=$14", [empresa_id, nombre, apellido, correo, clave, fecha_registro, identificacion, estado, tipoVinculacion, supervisor, area, sede, puesto, usuario_id]);
                }
            }));
            res.json({ "code": 200, "response": req.body });
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
            yield database_1.default.query("UPDATE usuario set empresa_id=$1, nombre=$2, apellido=$3,  fecha_registro=$4, identificacion=$5, estado=$6 where usuario_id=$7", [empresa_id, nombre, apellido, fecha_registro, identificacion, estado, usuario_id]);
            const usuario = yield database_1.default.query(usuarioRepository_1.usuarioRepository.deleteRolUsuario, [usuario_id]);
            for (let i = 0; i < roles.length; i++) {
                yield database_1.default.query("INSERT INTO rol_usuario(rol_id, usuario_id) VALUES ($1,$2)", [roles[i], usuario_id]);
            }
            console.log("usuario guardo:");
            res.json({ "code": 200, "usuario_id": usuario_id });
        });
    }
    updateProporcion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var proporcion_id = req.body.proporcion_id;
            var contador_factura = req.body.contador_factura;
            var contador_remision = req.body.contador_remision;
            console.log(req.body);
            yield database_1.default.query("UPDATE proporcion set contador_factura=$1, contador_remision=$2 where proporcion_id=$3", [contador_factura, contador_remision, proporcion_id]);
            console.log("proporcion actualizada:");
            res.json({ "code": 200, "proporcion_id": proporcion_id });
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
    getActivacionAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rol = yield database_1.default.query(usuarioRepository_1.usuarioRepository.getActivacionAll);
            res.json(rol.rows);
        });
    }
    guardarRutas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioId = req.query.usuarioId;
            let subMenuId = req.query.subMenuId.split(",");
            console.log(subMenuId);
            yield database_1.default.query(usuarioRepository_1.usuarioRepository.deleteOpcionUsuario, [usuarioId]);
            for (let i = 0; i < subMenuId.length; i++) {
                console.log(subMenuId[i]);
                yield database_1.default.query("INSERT INTO opcion_usuario(sub_menu_id, usuario_id, fecha_registro,estado) VALUES ($1,$2,NOW(),1)", [subMenuId[i], usuarioId]);
            }
            console.log("rutas guardo:");
            res.json({ "code": 200, "usuario_id": usuarioId });
        });
    }
    guardarActivaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioId = req.query.usuarioId;
            let activacionId = req.query.activacionId.split(",");
            yield database_1.default.query(usuarioRepository_1.usuarioRepository.deleteActivacionUsuario, [usuarioId]);
            console.log(usuarioId);
            for (let i = 0; i < activacionId.length; i++) {
                yield database_1.default.query("INSERT INTO activacion_usuario(activacion_id, usuario_id) VALUES ($1,$2)", [activacionId[i], usuarioId]);
            }
            console.log("rutas guardo:");
            res.json({ "code": 200, "usuario_id": usuarioId });
        });
    }
}
exports.usuarioController = new UsuarioControllers();
