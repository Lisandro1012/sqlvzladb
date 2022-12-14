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
function selleCreate(newSeller) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield mysql_1.connect();
        const result = yield conn.query('INSERT INTO data_seller SET ?', [newSeller]);
        if (result)
            return 'New Seller Created';
        else
            return result;
    });
}
exports.selleCreate = selleCreate;
//# sourceMappingURL=seller.entitie.js.map