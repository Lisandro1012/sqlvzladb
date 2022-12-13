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
const publisher_entitie_1 = require("../entities/publisher.entitie");
function getPublish(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const get = yield publisher_entitie_1.publishAll();
        if (!get)
            res.status(404).json(get);
        else
            res.status(200).json(get);
    });
}
exports.getPublish = getPublish;
function createPublish(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPublish = req.body;
        const create = yield publisher_entitie_1.publishCreate(newPublish);
        if (!create)
            res.status(404).json({ message: create });
        else
            res.status(200).json({ message: create });
    });
}
exports.createPublish = createPublish;
//# sourceMappingURL=publish.service.js.map