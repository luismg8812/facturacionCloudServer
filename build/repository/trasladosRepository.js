"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TrasladosRepository {
    constructor() {
        this.getIdRequerimiento = "select nextval('s_requerimiento')";
        this.getIdRequerimientoDetalle = "select nextval('s_requerimiento_detalle')";
        this.deleteRequerimientoDetalle = "delete from requerimiento_detalle where requerimiento_id =$1";
    }
}
exports.trasladosRepository = new TrasladosRepository();
