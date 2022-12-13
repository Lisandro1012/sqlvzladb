"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { createPool, Pool } from "mysql2/promise";
const promise_1 = require("mysql2/promise");
const config_1 = require("../config");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield promise_1.createPool({
            user: config_1.DB_USER,
            password: config_1.DB_PASSWORD,
            host: config_1.DB_HOST,
            port: config_1.DB_PORT,
            database: config_1.DB_NAME,
        });
        return connection;
    });
}
exports.connect = connect;
connect();
//# sourceMappingURL=mysql.js.map