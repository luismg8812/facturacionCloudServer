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
class DocumentoControllers {
    createDocumento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let tipo_documento_id = req.body.tipo_documento_id;
            var empresa_id = req.body.empresa_id;
            var proveedor_id = req.body.proveedor_id;
            var usuario_id = req.body.usuario_id;
            var cliente_id = req.body.cliente_id;
            var empleado_id = req.body.empleado_id;
            var fecha_registro = req.body.fecha_registro;
            var consecutivo_dian = req.body.consecutivo_dian;
            var impreso = req.body.impreso;
            var total = req.body.total;
            var excento = req.body.excento;
            var gravado = req.body.gravado;
            var impuesto = req.body.impuesto;
            var cierre_diario = req.body.cierre_diario;
            var detalle_entrada = req.body.detalle_entrada;
            var mac = req.body.mac;
            var saldo = req.body.saldo;
            var peso_total = req.body.peso_total;
            var descuento = req.body.descuento;
            var cambio = req.body.cambio;
            var iva_5 = req.body.iva_5;
            var iva_19 = req.body.iva_19;
            var base_5 = req.body.base_5;
            var base_19 = req.body.base_19;
            var retefuente = req.body.retefuente;
            var interes = req.body.interes;
            var total_costo = req.body.total_costo;
            var letra_consecutivo = req.body.letra_consecutivo;
            var invoice = req.body.invoice;
            var anulado = req.body.anulado;
            console.log(req.body);
            const id = yield database_1.default.query(documentoRepository_1.documentoRepository.getIdDocumento);
            const documento_id = id.rows[0].nextval;
            console.log(documento_id);
            var query = "INSERT INTO documento(documento_id,tipo_documento_id, empresa_id, proveedor_id, usuario_id, cliente_id, empleado_id, fecha_registro, consecutivo_dian,impreso,total,excento,gravado,impuesto,cierre_diario,detalle_entrada,mac,saldo,peso_total,descuento, cambio,iva_5,iva_19,base_5,base_19,retefuente,interes,total_costo,letra_consecutivo,invoice,anulado) VALUES ($31,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30 )";
            yield database_1.default.query(query, [tipo_documento_id, empresa_id, proveedor_id, usuario_id, cliente_id, empleado_id, fecha_registro, consecutivo_dian, impreso, total, excento, gravado, impuesto, cierre_diario, detalle_entrada, mac, saldo, peso_total, descuento, cambio, iva_5, iva_19, base_5, base_19, retefuente, interes, total_costo, letra_consecutivo, invoice, anulado, documento_id]).then(res2 => {
                res.json({ "code": 200, "documento_id": documento_id });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "documento_id": documento_id });
            });
        });
    }
}
exports.documentoControllers = new DocumentoControllers();
