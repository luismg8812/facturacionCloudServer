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
            const fecha = yield database_1.default.query(documentoRepository_1.documentoRepository.getfechaNow);
            var fecha_registro = fecha.rows[0].fecha_registro;
            var fecha_entrega = req.body.fecha_entrega;
            var consecutivo_dian = req.body.consecutivo_dian;
            var impreso = req.body.impreso;
            var total = req.body.total;
            var excento = req.body.excento;
            var gravado = req.body.gravado;
            var iva = req.body.impuesto;
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
            var anulado = req.body.anulado;
            var descripcion_cliente = req.body.descripcion_cliente;
            var descripcion_trabajador = req.body.descripcion_trabajador;
            var modelo_marca_id = req.body.modelo_marca_id;
            var linea_vehiculo = req.body.linea_vehiculo;
            var impresora = req.body.impresora;
            var invoice_id = req.body.invoice_id;
            var cufe = req.body.cufe;
            console.log(req.body);
            const id = yield database_1.default.query(documentoRepository_1.documentoRepository.getIdDocumento);
            const documento_id = id.rows[0].nextval;
            console.log(documento_id);
            var query = "INSERT INTO documento(documento_id,tipo_documento_id, empresa_id, proveedor_id, usuario_id, cliente_id, empleado_id, fecha_registro, consecutivo_dian,impreso,total,excento,gravado,iva,cierre_diario,detalle_entrada,mac,saldo,peso_total,descuento, cambio,iva_5,iva_19,base_5,base_19,retefuente,interes,total_costo,letra_consecutivo,anulado, fecha_entrega, descripcion_cliente, descripcion_trabajador,modelo_marca_id,linea_vehiculo,impresora,invoice_id,cufe) VALUES ($30,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$31,$32,$33,$34,$35,$36,$37,$38 )";
            yield database_1.default.query(query, [tipo_documento_id, empresa_id, proveedor_id, usuario_id, cliente_id, empleado_id, fecha_registro, consecutivo_dian, impreso, total, excento, gravado, iva, cierre_diario, detalle_entrada, mac, saldo, peso_total, descuento, cambio, iva_5, iva_19, base_5, base_19, retefuente, interes, total_costo, letra_consecutivo, anulado, documento_id, fecha_entrega, descripcion_cliente, descripcion_trabajador, modelo_marca_id, linea_vehiculo, impresora, invoice_id, cufe]).then(res2 => {
                res.json({ "code": 200, "documento_id": documento_id, "fecha_registro": fecha_registro });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "documento_id": documento_id });
            });
            //await db.query("update documento set fecha_registro= CURRENT_TIMESTAMP where documento_id= $1", [documento_id]);
        });
    }
    saveRetiro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var empresa_id = req.body.empresa_id;
            var usuario_hace_id = req.body.usuario_hace_id;
            var usuario_aplica_id = req.body.usuario_aplica_id;
            var valor = req.body.valor;
            var cierre_diario = req.body.cierre_diario;
            var descripcion = req.body.descripcion;
            const fecha = yield database_1.default.query(documentoRepository_1.documentoRepository.getfechaNow);
            var fecha_registro = fecha.rows[0].fecha_registro;
            console.log(req.body);
            const id = yield database_1.default.query(documentoRepository_1.documentoRepository.getIdRetiroCaja);
            const retiro_caja_id = id.rows[0].nextval;
            console.log("se inserta el retiro caja: " + retiro_caja_id);
            var query = "INSERT INTO retiro_caja(retiro_caja_id,empresa_id, usuario_hace_id, usuario_aplica_id, valor, cierre_diario, fecha_registro,descripcion) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)";
            yield database_1.default.query(query, [retiro_caja_id, empresa_id, usuario_hace_id, usuario_aplica_id, valor, cierre_diario, fecha_registro, descripcion]).then(res2 => {
                res.json({ "code": 200, "retiro_caja_id": retiro_caja_id, "fecha_registro": fecha_registro });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "retiro_caja_id": retiro_caja_id });
            });
        });
    }
    saveInvoice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let documento_id = req.body.documento_id;
            let invoice_id = req.body.invoice_id;
            let fecha_registro = req.body.fecha_registro;
            let mensaje = req.body.mensaje;
            let status = req.body.status;
            console.log(req.body);
            const id = yield database_1.default.query(documentoRepository_1.documentoRepository.getIdDocumentoInvoice);
            const documento_invoice_id = id.rows[0].nextval;
            console.log(documento_invoice_id);
            var query = "INSERT INTO documento_invoice(documento_invoice_id,documento_id,invoice_id,fecha_registro,mensaje,status) VALUES ($1,$2,$3,$4,$5,$6)";
            console.log(query);
            yield database_1.default.query(query, [documento_invoice_id, documento_id, invoice_id, fecha_registro, mensaje, status]).then(res2 => {
                res.json({ "code": 200, "documento_invoice_id": documento_invoice_id });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "documento_invoice_id": documento_invoice_id });
            });
        });
    }
    saveDocumentoNota(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let documento_id = req.body.documento_id;
            let nota_id = req.body.nota_id;
            let fecha_registro = req.body.fecha_registro;
            let estado = req.body.estado;
            console.log(req.body);
            const id = yield database_1.default.query(documentoRepository_1.documentoRepository.getIdDocumentoNota);
            const documento_nota_id = id.rows[0].nextval;
            console.log(documento_nota_id);
            var query = "INSERT INTO documento_nota(documento_nota_id,documento_id,nota_id,fecha_registro,estado) VALUES ($1,$2,$3,$4,$5)";
            console.log(query);
            yield database_1.default.query(query, [documento_nota_id, documento_id, nota_id, fecha_registro, estado]).then(res2 => {
                res.json({ "code": 200, "documento_nota_id": documento_nota_id });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "documento_nota_id": documento_nota_id });
            });
        });
    }
    deleteDocumentoOrdenByOrden(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var documento_id = req.body.documento_id;
            console.log(req.body);
            var query = "delete from documento_orden where orden_id = $1";
            yield database_1.default.query(query, [documento_id]).then(res2 => {
                res.json({ "code": 200, "documento_id": documento_id });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "documento_id": documento_id });
            });
        });
    }
    createDocumentoOrden(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var documento_orden_id = req.body.tipo_pago_id;
            var documento_id = req.body.documento_id;
            var orden_id = req.body.orden_id;
            console.log(req.body);
            var query = "INSERT INTO documento_orden (documento_id,orden_id) VALUES ($1,$2)";
            yield database_1.default.query(query, [documento_id, orden_id]).then(res2 => {
                res.json({ "code": 200, "documento_id": documento_id });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "documento_id": documento_id });
            });
        });
    }
    createTipoPagoDocumento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var tipo_pago_id = req.body.tipo_pago_id;
            var documento_id = req.body.documento_id;
            var fecha_registro = req.body.fecha_registro;
            var valor = req.body.valor;
            if (valor == '') {
                valor = 0;
            }
            console.log(req.body);
            var query = "INSERT INTO tipo_pago_documento(documento_id,tipo_pago_id, fecha_registro, valor) VALUES ($1,$2,$3,$4)";
            yield database_1.default.query(query, [documento_id, tipo_pago_id, fecha_registro, valor]).then(res2 => {
                res.json({ "code": 200, "documento_id": documento_id });
            }).catch(error => {
                console.error("error en crear tipo pago documento");
                console.error(error);
                res.json({ "code": 400, "documento_id": documento_id });
            });
        });
    }
    updateDocumentoNota(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let documento_id = req.body.documento_id;
            let nota_id = req.body.nota_id;
            var estado = req.body.estado;
            var documento_nota_id = req.body.documento_nota_id;
            var fecha_registro = req.body.fecha_registro;
            console.log(req.body);
            var query = "UPDATE documento_nota SET  documento_id=$1, nota_id= $2, estado=$3, fecha_registro=$4 WHERE documento_nota_id = $5";
            console.log(query);
            yield database_1.default.query(query, [documento_id, nota_id, estado, fecha_registro, documento_nota_id]).then(res2 => {
                res.json({ "code": 200, "documento_nota_id": documento_nota_id });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "documento_nota_id": documento_nota_id, "error": error.error });
            });
        });
    }
    updateDocumento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let documento_id = req.body.documento_id;
            let tipo_documento_id = req.body.tipo_documento_id;
            var empresa_id = req.body.empresa_id;
            var proveedor_id = req.body.proveedor_id;
            var usuario_id = req.body.usuario_id;
            var cliente_id = req.body.cliente_id;
            var empleado_id = req.body.empleado_id;
            var nota_id = req.body.nota_id;
            const id = yield database_1.default.query(documentoRepository_1.documentoRepository.getFechaRegistro, [documento_id]);
            var fecha_registro = id.rows[0].fecha_registro;
            console.log(fecha_registro);
            var consecutivo_dian = req.body.consecutivo_dian;
            var impreso = req.body.impreso;
            var total = req.body.total;
            var excento = req.body.excento;
            var gravado = req.body.gravado;
            var iva = req.body.iva;
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
            var anulado = req.body.anulado;
            var descripcion_cliente = req.body.descripcion_cliente;
            var descripcion_trabajador = req.body.descripcion_trabajador;
            var fecha_entrega = req.body.fecha_entrega;
            var modelo_marca_id = req.body.modelo_marca_id;
            var linea_vehiculo = req.body.linea_vehiculo;
            var impresora = req.body.impresora;
            var invoice_id = req.body.invoice_id;
            var cufe = req.body.cufe;
            console.log(req.body);
            var query = "UPDATE documento SET  tipo_documento_id=$1, empresa_id= $2, proveedor_id=$3, usuario_id=$4, cliente_id=$5, empleado_id=$6, fecha_registro=$7, consecutivo_dian=$8,impreso=$9,total=$10,excento=$11,gravado=$12,iva=$13,cierre_diario=$14,detalle_entrada=$15,mac=$16,saldo=$17,peso_total=$18,descuento=$19, cambio=$20,iva_5=$21,iva_19=$22,base_5=$23,base_19=$24,retefuente=$25,interes=$26,total_costo=$27,letra_consecutivo=$28,anulado=$29 ,  fecha_entrega=$31, descripcion_cliente=$32, descripcion_trabajador=$33, modelo_marca_id=$34,linea_vehiculo=$35, impresora=$36, invoice_id=$37, cufe=$38, nota_id=$39 WHERE documento_id = $30";
            console.log(query);
            yield database_1.default.query(query, [tipo_documento_id, empresa_id, proveedor_id, usuario_id, cliente_id, empleado_id, fecha_registro, consecutivo_dian, impreso, total, excento, gravado, iva, cierre_diario, detalle_entrada, mac, saldo, peso_total, descuento, cambio, iva_5, iva_19, base_5, base_19, retefuente, interes, total_costo, letra_consecutivo, anulado, documento_id, fecha_entrega, descripcion_cliente, descripcion_trabajador, modelo_marca_id, linea_vehiculo, impresora, invoice_id, cufe, nota_id]).then(res2 => {
                res.json({ "code": 200, "documento_id": documento_id });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "documento_id": documento_id, "error": error.error });
            });
        });
    }
    getDocumentoByTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            const usuarioId = req.query.usuarioId;
            const impreso = req.query.impreso;
            const cerrado = req.query.cerrado;
            let tipoDocumentoId = req.query.tipoDocumentoId.split(",");
            console.log(tipoDocumentoId);
            let query = "select * from documento where empresa_id= $1 ";
            if (usuarioId != "") {
                query = query + " and usuario_id= " + usuarioId;
            }
            if (impreso != "") {
                query = query + " and impreso= " + impreso;
            }
            if (cerrado == 'false') {
                query = query + " and cerrado= 0";
            }
            else {
                if (cerrado == 'true') {
                    query = query + " and cerrado= 1";
                }
            }
            query = query + " and tipo_documento_id in () order by documento_id";
            query = query.replace('()', "(" + tipoDocumentoId.toString() + ")");
            console.log(query);
            const docuemntos = yield database_1.default.query(query, [empresaId]);
            res.json(docuemntos.rows);
        });
    }
    getDocumentoOrdenById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ordenId = req.query.ordenId;
            console.log(ordenId);
            let query = "select * from documento_orden where orden_id= $1 ";
            const docuemntos = yield database_1.default.query(query, [ordenId]);
            res.json(docuemntos.rows);
        });
    }
    getTiposDocumento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "select * from tipo_documento";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getInvoice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "select * from Invoice order by nombre";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getOrdenesByDocumentoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const documentoId = req.query.documentoId;
            let query = "select * from documento  where documento_id in (select orden_id from documento_orden  where documento_id = $1) ";
            console.log(query);
            const docuemntos = yield database_1.default.query(query, [documentoId]);
            res.json(docuemntos.rows);
        });
    }
    getByDocumentoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const documentoId = req.query.documentoId;
            let query = "select * from documento  where documento_id = $1 ";
            console.log(query);
            const docuemntos = yield database_1.default.query(query, [documentoId]);
            res.json(docuemntos.rows);
        });
    }
    getDocumentoInvoiceByDocumento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const documentoId = req.query.documentoId;
            let query = "select * from documento_invoice  where documento_id = $1 order by fecha_registro desc ";
            console.log(query);
            const docuemntos = yield database_1.default.query(query, [documentoId]);
            res.json(docuemntos.rows);
        });
    }
    getDocumentoNotaByDocumento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const documentoId = req.query.documentoId;
            let query = "select * from DOCUMENTO_NOTA  where documento_id = $1 order by fecha_registro desc ";
            console.log(query);
            const docuemntos = yield database_1.default.query(query, [documentoId]);
            res.json(docuemntos.rows);
        });
    }
    getCuadreCaja(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            const usuarioId = req.query.usuarioId;
            const cerrado = req.query.cerrado;
            let tipoDocumentoId = req.query.tipoDocumentoId.split(",");
            let query = "select total_facturas,total_notas,efectivo,documentos_no_impresos, abonos,tarjetas, cheques,vales,cartera,retiro_caja from"
                + " ( select COALESCE(sum(total),0) total_facturas from documento";
            query = query + "  where empresa_id=" + empresaId;
            query = query + "  and usuario_id= " + usuarioId;
            query = query + "  and cierre_diario= " + cerrado;
            query = query + "  and tipo_documento_id in ()";
            query = query + "  and nota_id is null "; // los documentos que tienen nota no se toman en cuenta
            query = query + " ) total,";
            query = query + " ( select COALESCE(sum(total),0) total_notas from documento,documento_nota";
            query = query + "  where empresa_id=" + empresaId;
            query = query + "  and documento.documento_id= documento_nota.documento_id ";
            query = query + "  and usuario_id= " + usuarioId;
            query = query + "  and cierre_diario= " + cerrado;
            query = query + "  and estado ='1' ";
            query = query + "  and tipo_documento_id in (12,13)";
            query = query + " ) total_nota,";
            query = query + " (  select count(*) documentos_no_impresos  from documento";
            query = query + "    where empresa_id= " + empresaId;
            query = query + "    and usuario_id= " + usuarioId;
            query = query + "    and impreso=0";
            query = query + "    and total>0";
            query = query + "    and cierre_diario= " + cerrado;
            query = query + "    and tipo_documento_id =10";
            query = query + " ) impresos,";
            query = query + " (  select coalesce(sum(cantidad),0) abonos from abono,documento";
            query = query + "    where abono.documento_id = documento.documento_id";
            query = query + "  and cierre_diario= " + cerrado;
            query = query + "    and abono.usuario_id= " + usuarioId;
            query = query + "    and empresa_id=" + empresaId;
            query = query + "    and tipo_documento_id =10";
            query = query + " ) abono,";
            query = query + " ( select coalesce(sum(total),0) efectivo from documento where documento_id = 0";
            query = query + " ) efectivo,";
            query = query + " ( select coalesce(sum(total),0) tarjetas from documento,tipo_pago_documento ";
            query = query + "   where  tipo_pago_documento.documento_id=documento.documento_id  ";
            query = query + "   and tipo_pago_id=5";
            query = query + "  and cierre_diario= " + cerrado;
            query = query + "    and empresa_id=" + empresaId;
            query = query + "    and usuario_id= " + usuarioId;
            query = query + "  and tipo_documento_id in ()";
            query = query + " ) tarjetas,";
            query = query + " ( select coalesce(sum(total),0) cheques from documento,tipo_pago_documento ";
            query = query + "   where  tipo_pago_documento.documento_id=documento.documento_id  ";
            query = query + "   and tipo_pago_id=3";
            query = query + "  and cierre_diario= " + cerrado;
            query = query + "    and empresa_id=" + empresaId;
            query = query + "    and usuario_id= " + usuarioId;
            query = query + "  and tipo_documento_id in ()";
            query = query + " ) cheques,";
            query = query + " ( select coalesce(sum(total),0) vales from documento,tipo_pago_documento ";
            query = query + "   where  tipo_pago_documento.documento_id=documento.documento_id  ";
            query = query + "   and tipo_pago_id=6";
            query = query + "  and cierre_diario= " + cerrado;
            query = query + "    and empresa_id=" + empresaId;
            query = query + "    and usuario_id= " + usuarioId;
            query = query + "  and tipo_documento_id in ()";
            query = query + " ) vales,";
            query = query + " ( select coalesce(sum(valor),0) retiro_caja from retiro_caja where 1=1";
            query = query + "  and cierre_diario= " + cerrado;
            query = query + "    and empresa_id=" + empresaId;
            query = query + "    and usuario_aplica_id= " + usuarioId;
            query = query + " ) retiros, ";
            query = query + " ( select coalesce(sum(total),0) cartera from documento,tipo_pago_documento ";
            query = query + "   where  tipo_pago_documento.documento_id=documento.documento_id  ";
            query = query + "   and tipo_pago_id=2";
            query = query + "  and cierre_diario= " + cerrado;
            query = query + "    and empresa_id=" + empresaId;
            query = query + "    and usuario_id= " + usuarioId;
            query = query + "  and tipo_documento_id in ()";
            query = query + " ) cartera";
            const tokens = query.split('()');
            const stripped = tokens.join("(" + tipoDocumentoId.toString() + ")");
            query = stripped;
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getOrdenesTrabajo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            const placa = req.query.placa;
            const cliente = req.query.cliente;
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            const tipoDocumentoId = req.query.tipoDocumentoId;
            console.log(placa);
            let query = "select * from documento where empresa_id= $1 and tipo_documento_id = " + tipoDocumentoId;
            if (placa != '') {
                query = query + " and LOWER(detalle_entrada) like LOWER('%" + placa + "%')";
            }
            if (cliente != '') {
                query = query + " and cliente_id=  " + cliente;
            }
            if (fechaInicial != '') {
                query = query + " and fecha_registro>= '" + fechaInicial + "'";
            }
            if (fechaFinal != '') {
                query = query + " and fecha_registro <= '" + fechaFinal + "'";
            }
            query = query + " order by documento_id desc";
            console.log(query);
            const docuemntos = yield database_1.default.query(query, [empresaId]);
            res.json(docuemntos.rows);
        });
    }
    getRetirosByFechaAndTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            console.log(req.query);
            let usuario_aplica_id = req.query.usuario_aplica_id;
            let empresaId = req.query.empresaId;
            let usuario_hace_id = req.query.usuario_hace_id;
            let query = "select * from retiro_caja where empresa_id = " + empresaId;
            if (fechaInicial != '') {
                query = query + " and fecha_registro>= '" + fechaInicial + "'";
            }
            if (fechaFinal != '') {
                query = query + " and fecha_registro <= '" + fechaFinal + "'";
            }
            if (usuario_aplica_id != '') {
                query = query + " and usuario_aplica_id = " + usuario_aplica_id;
            }
            if (usuario_hace_id != '') {
                query = query + " and usuario_hace_id =  " + usuario_hace_id;
            }
            query = query + " order by fecha_registro";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getDocumentosByFechaAndTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            console.log(req.query);
            let empleadoId = req.query.idEmpleados;
            let empresaId = req.query.empresaId;
            let usuarioId = req.query.usuarioId;
            let tipoDocumentoId = req.query.tipoDocumentoId;
            let query = "select sum(total) total,DATE(fecha_registro) fecha, sum(base_5) base_5,count(*) num,sum(base_19) base_19, "
                + " sum(iva_5) iva_5, sum(iva_19) iva_19, sum(excento) excento from documento where 1=1";
            query = query + " and empresa_id = " + empresaId;
            if (tipoDocumentoId != '') {
                query = query + "  and tipo_documento_id = " + tipoDocumentoId;
            }
            else {
                query = query + "  and tipo_documento_id = 10 and impreso=1 "; //se muestra factura por defecto si viene vacio
            }
            if (fechaInicial != '') {
                query = query + " and fecha_registro>= '" + fechaInicial + "'";
            }
            if (fechaFinal != '') {
                query = query + " and fecha_registro <= '" + fechaFinal + "'";
            }
            if (usuarioId != '') {
                query = query + " and usuario_id = " + usuarioId;
            }
            if (empleadoId != '') {
                query = query + " and empleado_id =  " + empleadoId;
            }
            query = query + " GROUP BY DATE(fecha_registro) order by fecha";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getCarteraClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            let empresaId = req.query.empresaId;
            let clienteId = req.query.clienteId;
            let proveedorId = req.query.proveedorId;
            let tipoDocumentoId = req.query.tipoDocumentoId;
            if (tipoDocumentoId == undefined || tipoDocumentoId == "") {
                tipoDocumentoId = '10'; //factura por defecto
            }
            console.log(req.query);
            let query = `select documento_id,fecha_registro, consecutivo_dian, total, valor, saldo,cliente_id,proveedor_id from  
        (select documento.documento_id,documento.fecha_registro, consecutivo_dian, cliente_id,proveedor_id,total,valor, saldo from tipo_pago_documento, documento 
         where tipo_pago_id = 2
         and tipo_documento_id = ${tipoDocumentoId}`;
            query = query + " and empresa_id = " + empresaId;
            if (fechaInicial != "") {
                query = query + " and DATE(fecha_registro) >= '" + fechaInicial + "'";
            }
            if (fechaFinal != "") {
                query = query + " and DATE(fecha_registro) <= '" + fechaFinal + "'";
            }
            if (clienteId != "") {
                query = query + " and cliente_id =  " + clienteId;
            }
            if (proveedorId != "" && proveedorId != undefined) {
                query = query + " and proveedor_id =  " + proveedorId;
            }
            query = query + " and tipo_pago_documento.documento_id=documento.documento_id) tipo ";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getDocumentosByTipoPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            let empresaId = req.query.empresaId;
            let tipoDocumentoId = req.query.tipoDocumentoId;
            console.log(req.query);
            let query = "select tipo_pago.nombre, sum(tipo_pago_documento.valor) total, count(*) num " +
                " from tipo_pago,tipo_pago_documento, documento " +
                " where tipo_pago_documento.tipo_pago_id = tipo_pago.tipo_pago_id " +
                " and tipo_pago_documento.documento_id = documento.documento_id " +
                " and documento.empresa_id=" + empresaId +
                " and documento.tipo_documento_id=" + tipoDocumentoId +
                " and documento.impreso = 1" +
                " and DATE(documento.fecha_registro) BETWEEN '" + fechaInicial + "' and '" + fechaFinal + "'" +
                " GROUP by nombre";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getDocumentoForFacturacionElectronica(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            let empresaId = req.query.empresaId;
            let tipoDocumentoId = req.query.tipoDocumentoId.split(",");
            let invoiceId = req.query.invoiceId;
            console.log(req.query);
            let query = " select  * from documento where  impreso=1 " +
                " and empresa_id = " + empresaId +
                " and invoice_id= " + invoiceId +
                " and tipo_documento_id in ()";
            query = query.replace('()', "(" + tipoDocumentoId.toString() + ")");
            query = query + " order by documento.fecha_registro desc";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getDocumentoByTipoAndFecha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            let proveedorId = req.query.proveedorId;
            let clienteId = req.query.clienteId;
            let empleadoId = req.query.empleadoId;
            let empresaId = req.query.empresaId;
            let usuarioId = req.query.usuarioId;
            let tipoDocumentoId = req.query.tipoDocumentoId;
            let documentoId = req.query.documentoId;
            let consecutivoDian = req.query.consecutivoDian;
            console.log(req.query);
            let query = "select *  from documento where 1=1";
            query = query + " and empresa_id = " + empresaId;
            query = query + "  and tipo_documento_id = " + tipoDocumentoId;
            if (tipoDocumentoId == '10') {
                query = query + " and impreso = 1  and consecutivo_dian is not null";
            }
            if (fechaInicial != "") {
                query = query + " and DATE(fecha_registro) >= '" + fechaInicial + "'";
            }
            if (fechaFinal != "") {
                query = query + " and DATE(fecha_registro) <= '" + fechaFinal + "'";
            }
            if (usuarioId != '') {
                query = query + " and usuario_id = " + usuarioId;
            }
            if (empleadoId != '') {
                query = query + " and empleado_id =  " + empleadoId;
            }
            if (clienteId != '') {
                query = query + " and cliente_id =  " + clienteId;
            }
            if (proveedorId != '') {
                query = query + " and proveedor_id =  " + proveedorId;
            }
            if (documentoId != '') {
                query = query + " and documento_id =  " + documentoId;
            }
            if (consecutivoDian != '') {
                query = query + " and consecutivo_dian  like '%" + consecutivoDian + "%'";
            }
            query = query + " order by fecha_registro desc";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getVentasPorSubGrupos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioId = req.query.usuarioId;
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            const conCierre = req.query.conCierre;
            console.log(req.query);
            let query = `select   sub_grupo.nombre,sum(parcial) total  from documento_detalle,documento, producto, sub_grupo
        where documento_detalle.documento_id= documento.documento_id
        and producto.producto_id = documento_detalle.producto_id
        and sub_grupo.sub_grupo_id= producto.sub_grupo_id
        and documento_detalle.estado=1
        and impreso=1
        and documento.tipo_documento_id in (10,9)
        and documento.consecutivo_dian is not null`;
            if (fechaInicial != '') {
                query = query + " and documento.fecha_registro>= '" + fechaInicial + "'";
            }
            if (fechaFinal != '') {
                query = query + " and documento.fecha_registro <= '" + fechaFinal + "'";
            }
            if (conCierre == 'true') {
                query = query + " and (documento.cierre_diario=0 or documento.cierre_diario is null)";
            }
            if (usuarioId != '') {
                query = query + " and usuario_id = " + usuarioId;
            }
            query = query + " group by sub_grupo.nombre";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getVentasPorGrupos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioId = req.query.usuarioId;
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            const conCierre = req.query.conCierre;
            console.log(req.query);
            let query = `select   grupo.nombre,sum(parcial) total  from documento_detalle,documento, producto, grupo
        where documento_detalle.documento_id= documento.documento_id
        and producto.producto_id = documento_detalle.producto_id
        and grupo.grupo_id= producto.grupo_id
        and documento_detalle.estado=1
        and impreso=1
        and documento.tipo_documento_id in (10,9)
        and documento.consecutivo_dian is not null`;
            if (fechaInicial != '') {
                query = query + " and documento.fecha_registro>= '" + fechaInicial + "'";
            }
            if (fechaFinal != '') {
                query = query + " and documento.fecha_registro <= '" + fechaFinal + "'";
            }
            if (conCierre == 'true') {
                query = query + " and (documento.cierre_diario=0 or documento.cierre_diario is null)";
            }
            if (usuarioId != '') {
                query = query + " and usuario_id = " + usuarioId;
            }
            query = query + " group by grupo.nombre";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getNominaByEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            const tipoDocumentoId = req.query.tipoDocumentoId;
            console.log(req.query);
            let empleadoId = req.query.idEmpleados.split(",");
            let query = "select subt.nombre, subt.empleado_id, subt.subtotal subtotal, coalesce(vale.vales,0) vales,"
                + " coalesce(produ.productos,0) productos, coalesce(subt.pago_admin, 0) admon, coalesce(subt.ahorro,0) ahorro,"
                + " (subt.subtotal+coalesce(subt.pago_admin, 0)-coalesce(vale.vales,0)-coalesce(produ.productos,0)-coalesce(subt.ahorro,0)) total"
                + " from"
                + "  (select nombre, empleado.empleado_id,  coalesce(sum(documento.total),0)*(1 -(empleado.porcentaje_pago::decimal/100)) subtotal,empleado.pago_admin,coalesce(sum(documento.total),0)* (empleado.porcentaje_descuento::decimal/100) ahorro"
                + "   from  empleado LEFT JOIN documento ON empleado.empleado_id = documento.empleado_id"
                + "   and documento.tipo_documento_id= " + tipoDocumentoId;
            if (fechaInicial == '') {
                query = query + " and documento.cierre_diario =0";
            }
            else {
                query = query + " and documento.fecha_registro>= '" + fechaInicial + "' ";
                query = query + " and documento.fecha_registro <= '" + fechaFinal + "' ";
            }
            query = query + "   GROUP by nombre, empleado.empleado_id,empleado.pago_admin ) subt,"
                + "  (select nombre, empleado.empleado_id,  sum(documento.total) vales "
                + "   from  empleado LEFT JOIN documento ON empleado.empleado_id = documento.empleado_id ";
            query = query + "   and documento.tipo_documento_id=8 ";
            if (fechaInicial == '') {
                query = query + " and documento.cierre_diario =0";
            }
            else {
                query = query + " and documento.fecha_registro>= '" + fechaInicial + "' ";
                query = query + " and documento.fecha_registro <= '" + fechaFinal + "' ";
            }
            query = query + "   GROUP by nombre, empleado.empleado_id) vale,"
                + "  (select nombre, empleado.empleado_id,  sum(producto_empleado.valor) productos "
                + "   from  empleado LEFT JOIN producto_empleado ON empleado.empleado_id = producto_empleado.empleado_id ";
            if (fechaInicial == '') {
                query = query + " and (producto_empleado.cierre_diario =0 or producto_empleado.cierre_diario is null)";
            }
            else {
                query = query + " and producto_empleado.fecha_registro>= '" + fechaInicial + "' ";
                query = query + " and producto_empleado.fecha_registro <= '" + fechaFinal + "' ";
            }
            query = query + "   GROUP by nombre, empleado.empleado_id) produ"
                + "   where subt.empleado_id = vale.empleado_id"
                + "   and subt.empleado_id = produ.empleado_id"
                + "   and  subt.empleado_id in ()";
            query = query.replace('()', "(" + empleadoId.toString() + ")");
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    cierreNomina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let cierre = 1;
            let query = "UPDATE documento SET cierre_diario = $1 where tipo_documento_id in (11,8) and empleado_id is not null; ";
            yield database_1.default.query("update producto_empleado set cierre_diario = 1");
            console.log(query);
            yield database_1.default.query(query, [cierre]).then(res2 => {
                res.json({ "code": 200, "documento_id": cierre });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "documento_id": cierre, "error": error.error });
            });
        });
    }
    getOrdenesByEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empleaId = req.query.empleadoId;
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            const tipoDocumentoId = req.query.tipoDocumentoId;
            let empleadoId = req.query.empleadoId.split(",");
            let query = "select * from documento where tipo_documento_id = " + tipoDocumentoId;
            if (empleadoId.length > 0) {
                query = query + "and empleado_id in ( " + empleadoId.toString() + " )";
            }
            if (fechaInicial != '') {
                query = query + " and fecha_registro>= '" + fechaInicial + "'";
            }
            if (fechaFinal != '') {
                query = query + " and fecha_registro <= '" + fechaFinal + "'";
            }
            else {
                query = query + " and cierre_diario=0";
            }
            query = query + " order by documento_id asc";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getOrdenesByEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empleadoId = req.query.empleadoId;
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            const tipoDocumentoId = req.query.tipoDocumentoId;
            let query = "select * from documento where tipo_documento_id = " + tipoDocumentoId;
            if (empleadoId != null) {
                query = query + "and empleado_id= " + empleadoId;
            }
            if (fechaInicial != '') {
                query = query + " and fecha_registro>= '" + fechaInicial + "'";
            }
            if (fechaFinal != '') {
                query = query + " and fecha_registro <= '" + fechaFinal + "'";
            }
            else {
                query = query + " and cierre_diario=0";
            }
            query = query + " order by documento_id asc";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
    getGananciaDocumentos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaInicial = req.query.fechaInicial;
            const fechaFinal = req.query.fechaFinal;
            let empresaId = req.query.empresaId;
            console.log(req.query);
            let query = `select total_ventas,total_costos_ventas,total_remisiones, total_costos_remisiones,iva_5,iva_19,excento,
        (total_ventas-total_costos_ventas) ganancias_ventas,(total_remisiones-total_costos_remisiones) ganancias_remisiones
        from 
           (select sum(total) total_ventas, sum(total_costo) total_costos_ventas, sum(iva_5) iva_5, sum(iva_19) iva_19,
            sum(excento) excento
            from documento 
            where tipo_documento_id=10 and impreso=1
            and empresa_id= ${empresaId}`;
            if (fechaInicial != '') {
                query = query + " and fecha_registro>= '" + fechaInicial + "'";
            }
            if (fechaFinal != '') {
                query = query + " and fecha_registro <= '" + fechaFinal + "'";
            }
            query = query + `) ventas,
           (select coalesce(sum(total),0) total_remisiones, coalesce(sum(total_costo),0) total_costos_remisiones
            from documento 
            where tipo_documento_id=9 and impreso=1
            and empresa_id= ${empresaId}`;
            if (fechaInicial != '') {
                query = query + " and fecha_registro>= '" + fechaInicial + "'";
            }
            if (fechaFinal != '') {
                query = query + " and fecha_registro <= '" + fechaFinal + "'";
            }
            query = query + " ) remisiones ";
            console.log(query);
            const docuemntos = yield database_1.default.query(query);
            res.json(docuemntos.rows);
        });
    }
}
exports.documentoControllers = new DocumentoControllers();
