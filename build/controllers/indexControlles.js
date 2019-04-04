"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexControllers {
    index(req, res) {
        res.send("intro index server");
    }
}
exports.indexControllers = new IndexControllers();
