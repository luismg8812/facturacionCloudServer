"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexControllers {
    index(req, res) {
        res.send("<h1>intro index server</h1>");
    }
}
exports.indexControllers = new IndexControllers();
