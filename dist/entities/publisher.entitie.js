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
const mysql_1 = require("../data-source/mysql");
function publishAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield mysql_1.connect();
            const publish = yield conn.query('SELECT * FROM data_publish WHERE active_publish = 1');
            return publish[0];
        }
        catch (e) {
            return e;
        }
    });
}
exports.publishAll = publishAll;
function publishCreate(newPublish) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield mysql_1.connect();
        const result = yield conn.query('INSERT INTO data_publish SET ?', [newPublish]);
        if (result)
            return 'New Publish Created';
        else
            return result;
    });
}
exports.publishCreate = publishCreate;
//# sourceMappingURL=publisher.entitie.js.map