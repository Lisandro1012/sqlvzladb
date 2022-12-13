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
const seller_entitie_1 = require("../entities/seller.entitie");
function createSeller(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newSeller = req.body;
        const create = yield seller_entitie_1.selleCreate(newSeller);
        if (!create)
            res.status(404).json({ message: create });
        else
            res.status(200).json({ message: create });
    });
}
exports.createSeller = createSeller;
//# sourceMappingURL=seller.service.js.map