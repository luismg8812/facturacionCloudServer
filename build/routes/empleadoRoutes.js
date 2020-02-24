"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadoControlles_1 = require("../controllers/empleadoControlles");
class EmpleadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/empleadoAll', empleadoControlles_1.empleadoControllers.empleadoAll);
        this.router.post('/createEmpleado', empleadoControlles_1.empleadoControllers.createEmpleado);
        this.router.put('/updateEmpleado', empleadoControlles_1.empleadoControllers.updateEmpleado);
    }
}
const empleadoRoutes = new EmpleadoRoutes();
exports.default = empleadoRoutes.router;
