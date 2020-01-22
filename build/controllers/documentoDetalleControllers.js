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
const documentoDetalleRepository_1 = require("../repository/documentoDetalleRepository");
class DocumentoDetalleControllers {
    createDocumentoDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let documento_id = req.body.documento_id;
            let producto_id = req.body.producto_id;
            let fecha_registro = req.body.fecha_registro;
            console.log(fecha_registro);
            let cantidad = req.body.cantidad;
            let estado = req.body.estado;
            let parcial = req.body.parcial;
            let unitario = req.body.unitario;
            let impreso_comanda = req.body.impreso_comanda;
            let descripcion = req.body.descripcion;
            console.log(req.body);
            const id = yield database_1.default.query(documentoDetalleRepository_1.documentoDetalleRepository.getIdDocumentoDetalle);
            const documento_detalle_id = id.rows[0].nextval;
            console.log(documento_detalle_id);
            var query = "INSERT INTO documento_detalle(documento_detalle_id, documento_id, producto_id, fecha_registro, cantidad, estado,parcial,unitario,impreso_comanda,descripcion) VALUES ($9,$1,$2,$3,$4,$5,$6,$7,$8,$10)";
            yield database_1.default.query(query, [documento_id, producto_id, fecha_registro, cantidad, estado, parcial, unitario, impreso_comanda, documento_detalle_id, descripcion]).then(res2 => {
                res.json({ "code": 200, "documento_detalle_id": documento_detalle_id });
            }).catch(error => {
                console.log(error);
                res.json({ "code": 400, "documento_detalle_id": documento_detalle_id, "error": error.error });
            });
        });
    }
    updateDocumentoDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let documento_detalle_id = req.body.documento_detalle_id;
            let documento_id = req.body.documento_id;
            let producto_id = req.body.producto_id;
            let fecha_registro = req.body.fecha_registro;
            console.log(fecha_registro);
            let cantidad = req.body.cantidad;
            let estado = req.body.estado;
            let parcial = req.body.parcial;
            let unitario = req.body.unitario;
            let impreso_comanda = req.body.impreso_comanda;
            let descripcion = req.body.descripcion;
            console.log(req.body);
            var query = "UPDATE documento_detalle SET  documento_id=$1, producto_id= $2, fecha_registro=$3, cantidad=$4, estado=$5, parcial=$6, unitario=$7, impreso_comanda=$8,descripcion=$9 WHERE documento_detalle_id = $10";
            yield database_1.default.query(query, [documento_id, producto_id, fecha_registro, cantidad, estado, parcial, unitario, impreso_comanda, descripcion, documento_detalle_id]).then(res2 => {
                res.json({ "code": 200, "documento_detalle_id": documento_detalle_id });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "documento_id": documento_id, "error": error.error });
            });
        });
    }
    getDocumentoDetalleByDocumento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const documento_id = req.query.documento_id;
            console.log(documento_id);
            const usuario = yield database_1.default.query(documentoDetalleRepository_1.documentoDetalleRepository.getDocumentoDetalleByDocumento, [documento_id]);
            res.json(usuario.rows);
        });
    }
}
exports.documentoDetalleControllers = new DocumentoDetalleControllers();
