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
const database_1 = __importDefault(require("../database"));
const documentoRepository_1 = require("../repository/documentoRepository");
const trasladosRepository_1 = require("../repository/trasladosRepository");
class TrasladosControllers {
    saveRequerimiento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let empresa_id = req.body.empresa_id;
            let observacion = req.body.observacion;
            let usuario_id = req.body.usuario_id;
            let estado = req.body.estado;
            let total = req.body.total;
            const fecha = yield database_1.default.query(documentoRepository_1.documentoRepository.getfechaNow);
            var fecha_registro = fecha.rows[0].fecha_registro;
            console.log(req.body);
            const id = yield database_1.default.query(trasladosRepository_1.trasladosRepository.getIdRequerimiento);
            const requerimiento_id = id.rows[0].nextval;
            console.log(requerimiento_id);
            var query = "INSERT INTO requerimiento(requerimiento_id,empresa_id, usuario_id, fecha_registro, estado,total,observacion) VALUES ($1,$2,$3,$4,$5,$6,$7)";
            yield database_1.default.query(query, [requerimiento_id, empresa_id, usuario_id, fecha_registro, estado, total, observacion]).then(res2 => {
                res.json({ "code": 200, "requerimiento_id": requerimiento_id, "fecha_registro": fecha_registro });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "requerimiento_id": requerimiento_id });
            });
        });
    }
    saveRequerimientoDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let requerimiento_id = req.body.requerimiento_id;
            let producto_id = req.body.producto_id;
            let cantidad = req.body.cantidad;
            let estado = req.body.estado;
            let parcial = req.body.parcial;
            let unitario = req.body.unitario;
            let descripcion = req.body.descripcion;
            const fecha = yield database_1.default.query(documentoRepository_1.documentoRepository.getfechaNow);
            var fecha_registro = fecha.rows[0].fecha_registro;
            console.log(req.body);
            const id = yield database_1.default.query(trasladosRepository_1.trasladosRepository.getIdRequerimientoDetalle);
            const requerimiento_detalle_id = id.rows[0].nextval;
            console.log(requerimiento_detalle_id);
            var query = "INSERT INTO requerimiento_detalle(requerimiento_detalle_id,requerimiento_id, cantidad, estado, parcial,unitario,descripcion,fecha_registro,producto_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)";
            yield database_1.default.query(query, [requerimiento_detalle_id, requerimiento_id, cantidad, estado, parcial, unitario, descripcion, fecha_registro, producto_id]).then(res2 => {
                res.json({ "code": 200, "requerimiento_detalle_id": requerimiento_detalle_id, "fecha_registro": fecha_registro });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "requerimiento_detalle_id": requerimiento_detalle_id });
            });
        });
    }
    getRequerimientoDetalleByRequerimientoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const requerimientoId = req.query.requerimientoId;
            let query = "select * from requerimiento_detalle where requerimiento_id = " + requerimientoId;
            query = query + "  order by requerimiento_detalle_id desc";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getRequerimientos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            const fechaIni = req.query.fechaIni;
            const fechaFin = req.query.fechaFin;
            let query = "select * from requerimiento where 1= 1 ";
            if (empresaId != "") {
                query = query + " and empresa_id= " + empresaId;
            }
            if (fechaIni != '') {
                query = query + " and fecha_registro>= '" + fechaIni + "'";
            }
            if (fechaFin != '') {
                query = query + " and fecha_registro <= '" + fechaFin + "'";
            }
            query = query + "  order by fecha_registro desc";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
}
exports.trasladosControllers = new TrasladosControllers();
