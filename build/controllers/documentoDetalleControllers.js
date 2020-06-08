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
            let impuesto_producto = req.body.impuesto_producto;
            console.log(req.body);
            const id = yield database_1.default.query(documentoDetalleRepository_1.documentoDetalleRepository.getIdDocumentoDetalle);
            const documento_detalle_id = id.rows[0].nextval;
            console.log(documento_detalle_id);
            var query = "INSERT INTO documento_detalle(documento_detalle_id, documento_id, producto_id, fecha_registro, cantidad, estado,parcial,unitario,impreso_comanda,descripcion,impuesto_producto) VALUES ($9,$1,$2,$3,$4,$5,$6,$7,$8,$10,$11)";
            yield database_1.default.query(query, [documento_id, producto_id, fecha_registro, cantidad, estado, parcial, unitario, impreso_comanda, documento_detalle_id, descripcion, impuesto_producto]).then(res2 => {
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
            let impuesto_producto = req.body.impuesto_producto;
            console.log(req.body);
            var query = "UPDATE documento_detalle SET  documento_id=$1, producto_id= $2, fecha_registro=$3, cantidad=$4, estado=$5, parcial=$6, unitario=$7, impreso_comanda=$8,descripcion=$9, impuesto_producto=$11 WHERE documento_detalle_id = $10";
            yield database_1.default.query(query, [documento_id, producto_id, fecha_registro, cantidad, estado, parcial, unitario, impreso_comanda, descripcion, documento_detalle_id, impuesto_producto]).then(res2 => {
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
    getDocumentoDetalleByDocumentoList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const documento_id = req.query.documento_id;
            let query = "select * from DOCUMENTO_DETALLE where  estado=1 and documento_id in ()";
            query = query.replace('()', "(" + documento_id.toString() + ")");
            console.log(query);
            const usuario = yield database_1.default.query(query);
            res.json(usuario.rows);
        });
    }
    getDocumentosByFechaAndTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            let empleadoId = req.query.idEmpleados;
            let empresaId = req.query.empresaId;
            let usuarioId = req.query.usuarioId;
            console.log(req.query);
            let query = `select dd.documento_detalle_id, dd.fecha_registro,pp.nombre, COALESCE(pp.porcentaje_venta,0) porcentaje_venta, d.consecutivo_dian, 
        dd.cantidad, dd.unitario, d.empleado_id vendedor, dd.parcial, dd.parcial*(COALESCE(pp.porcentaje_venta,0)/100) gana
        from documento_detalle dd, producto pp, documento d
        where dd.producto_id = pp.producto_id
        and dd.documento_id = d.documento_id
        and d.impreso=1
        and dd.estado=1`;
            query = query + " and DATE(dd.fecha_registro) BETWEEN TO_TIMESTAMP('" + fechaInicial + "', 'DD-MM-YYYY') and TO_TIMESTAMP('" + fechaFinal + "', 'DD-MM-YYYY')";
            if (usuarioId != '') {
                query = query + " and d.usuario_id = " + usuarioId;
            }
            if (empleadoId != '') {
                query = query + " and d.empleado_id =  " + empleadoId;
            }
            query = query + " order by dd.documento_detalle_id desc";
            console.log(query);
            const usuario = yield database_1.default.query(query);
            res.json(usuario.rows);
        });
    }
}
exports.documentoDetalleControllers = new DocumentoDetalleControllers();
