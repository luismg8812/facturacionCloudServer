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
const nodemailer_1 = __importDefault(require("nodemailer"));
class ApiControllers {
    sendMail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let transporter = nodemailer_1.default.createTransport({
                host: "mail.effectivesoftware.com.co",
                port: 465,
                secure: true,
                auth: {
                    user: 'facturacion_electronica@effectivesoftware.com.co',
                    pass: 'Luismg88121234'
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            let info = yield transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>',
                to: "luismg8812@hotmail.com",
                subject: "Hello ✔",
                text: "Hello world?",
                html: "<b>Hello world?</b>" // html body
            });
            console.log(info.messajeId);
            res.json({ "code": 200, "messaje": info.messajeId });
        });
    }
}
exports.apiControllers = new ApiControllers();
