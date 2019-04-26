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
}
exports.productoControllers = new ProductoControllers();
