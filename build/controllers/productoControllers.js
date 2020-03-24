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
const productoRepository_1 = require("../repository/productoRepository");
const database_1 = __importDefault(require("../database"));
class ProductoControllers {
    getProductosByEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            const productos = yield database_1.default.query(productoRepository_1.productoRepository.getProductosByEmpresa, [empresaId]);
            res.json(productos.rows);
        });
    }
    getProductoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresaId = req.query.empresaId;
            const productoId = req.query.productoId;
            const productos = yield database_1.default.query(productoRepository_1.productoRepository.getProductoById, [empresaId, productoId]);
            res.json(productos.rows);
        });
    }
    inactivar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var producto_id = req.body.producto_id;
            let query = "update producto set estado=0 where producto_id = $1";
            yield database_1.default.query(query, [producto_id]).then(res2 => {
                res.json({ "code": 200, "producto_id": producto_id });
            }).catch(error => {
                res.json({ "code": 200, "producto_id": producto_id, "error:": error.error });
            });
        });
    }
    updateCantidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var producto_id = req.body.producto_id;
            var cantidad = req.body.cantidad;
            let query = "update producto set cantidad=$1 where producto_id = $2";
            yield database_1.default.query(query, [cantidad, producto_id]).then(res2 => {
                res.json({ "code": 200, "producto_id": producto_id });
            }).catch(error => {
                res.json({ "code": 200, "producto_id": producto_id, "error:": error.error });
            });
        });
    }
    updateProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var producto_id = req.body.producto_id;
            var grupo_id = req.body.grupo_id;
            var proveedor_id = req.body.proveedor_id;
            var marca_id = req.body.marca_id;
            var fecha_registro = req.body.fecha_registro;
            var costo = req.body.costo;
            var costo_publico = req.body.costo_publico;
            var codigo_interno = req.body.codigo_interno;
            var impuesto = req.body.impuesto;
            var stock_min = req.body.stock_min;
            var stock_max = req.body.stock_max;
            var codigo_barras = req.body.codigo_barras;
            var peso = req.body.peso;
            var balanza = req.body.balanza;
            var nombre = req.body.nombre;
            var cantidad = req.body.cantidad;
            var promo = req.body.promo;
            var pub_promo = req.body.pub_promo;
            var estado = req.body.estado;
            var kg_promo = req.body.kg_promo;
            var varios = req.body.varios;
            var utilidad_sugerida = req.body.utilidad_sugerida;
            var sub_producto = req.body.sub_producto;
            let query = " update producto set grupo_id=$1, proveedor_id=$2, marca_id=$3, fecha_registro=$4,"
                + " costo=$5, costo_publico=$6, sub_producto=$7, impuesto=$8, stock_min=$9,"
                + " stock_max=$10, codigo_barras=$11, peso=$12, balanza=$13, nombre=$14, "
                + " cantidad=$15, promo=$16, pub_promo=$17, estado=$18, kg_promo=$19, "
                + " varios=$20, utilidad_sugerida=$21 "
                + " where producto_id = $22";
            console.log(req.body);
            yield database_1.default.query(query, [grupo_id, proveedor_id, marca_id, fecha_registro, costo, costo_publico, sub_producto,
                impuesto, stock_min, stock_max, codigo_barras, peso, balanza, nombre, cantidad, promo, pub_promo, estado, kg_promo,
                varios, utilidad_sugerida, producto_id]).then(res2 => {
                res.json({ "code": 200, "producto_id": producto_id });
                console.log(req.body);
            }).catch(error => {
                res.json({ "code": 200, "producto_id": producto_id, "error:": error.error });
                console.log(error);
            });
        });
    }
    saveProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var grupo_id = req.body.grupo_id;
            var empresa_id = req.body.empresa_id;
            var proveedor_id = req.body.proveedor_id;
            var marca_id = req.body.marca_id;
            var fecha_registro = req.body.fecha_registro;
            var costo = req.body.costo;
            var costo_publico = req.body.costo_publico;
            var codigo_interno = req.body.codigo_interno;
            var impuesto = req.body.impuesto;
            var stock_min = req.body.stock_min;
            var stock_max = req.body.stock_max;
            var codigo_barras = req.body.codigo_barras;
            var peso = req.body.peso;
            var balanza = req.body.balanza;
            var nombre = req.body.nombre;
            var cantidad = req.body.cantidad;
            var promo = req.body.promo;
            var pub_promo = req.body.pub_promo;
            var estado = req.body.estado;
            var kg_promo = req.body.kg_promo;
            var varios = req.body.varios;
            var utilidad_sugerida = req.body.utilidad_sugerida;
            var sub_producto = req.body.sub_producto;
            console.log(req.body);
            const id = yield database_1.default.query(productoRepository_1.productoRepository.getIdProducto);
            const producto_id = id.rows[0].nextval;
            console.log(producto_id);
            var query = "INSERT INTO producto(producto_id,grupo_id,proveedor_id,marca_id,fecha_registro,costo,costo_publico,sub_producto,impuesto,stock_min,stock_max,codigo_barras,peso,balanza,nombre,cantidad,promo,pub_promo,estado,kg_promo,varios,utilidad_sugerida,empresa_id)"
                + " VALUES ($23,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22)";
            yield database_1.default.query(query, [grupo_id, proveedor_id, marca_id, fecha_registro, costo, costo_publico, sub_producto,
                impuesto, stock_min, stock_max, codigo_barras, peso, balanza, nombre, cantidad, promo, pub_promo, estado, kg_promo,
                varios, utilidad_sugerida, empresa_id, producto_id]).then(res2 => {
                res.json({ "code": 200, "producto_id": producto_id });
            }).catch(error => {
                console.error(error);
                res.json({ "code": 400, "producto_id": producto_id });
            });
        });
    }
}
exports.productoControllers = new ProductoControllers();
