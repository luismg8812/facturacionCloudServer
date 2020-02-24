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
const empleadoRepository_1 = require("../repository/empleadoRepository");
const database_1 = __importDefault(require("../database"));
class EmpleadoControllers {
    createEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var empresa_id = req.body.empresa_id;
            var nombre = req.body.nombre;
            var apellido = req.body.apellido;
            var telefono = req.body.telefono;
            var identificacion = req.body.identificacion;
            var estado = req.body.estado;
            console.log(req.body);
            const id = yield database_1.default.query(empleadoRepository_1.empleadoRepository.getIdEmpleado);
            const empleado_id = id.rows[0].nextval;
            console.log(empleado_id);
            var query = "INSERT INTO empleado(empleado_id,nombre, apellido, telefono, identificacion,estado,empresa_id) VALUES ($1,$2,$3,$4,$5,$6,$7)";
            yield database_1.default.query(query, [empleado_id, nombre, apellido, telefono, identificacion, estado, empresa_id]).then(res2 => {
                res.json({ "code": 200, "empleado_id": empleado_id });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "empleado_id": empleado_id });
            });
        });
    }
    updateEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var empresa_id = req.body.empresa_id;
            var nombre = req.body.nombre;
            var apellido = req.body.apellido;
            var telefono = req.body.telefono;
            var identificacion = req.body.identificacion;
            var estado = req.body.estado;
            var empleado_id = req.body.empleado_id;
            console.log(req.body);
            var query = "UPDATE empleado SET  empresa_id=$1, nombre= $2, apellido=$3, telefono=$4,identificacion =$5, estado=$6 WHERE empleado_id = $7";
            yield database_1.default.query(query, [empresa_id, nombre, apellido, telefono, identificacion, estado, empleado_id]).then(res2 => {
                res.json({ "code": 200, "empleado_id": empleado_id });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "empleado_id": empleado_id, "error": error.error });
            });
        });
    }
    empleadoAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            const rol = yield database_1.default.query(empleadoRepository_1.empleadoRepository.getEmpleadoByAll, [empresaId]);
            res.json(rol.rows);
        });
    }
}
exports.empleadoControllers = new EmpleadoControllers();
