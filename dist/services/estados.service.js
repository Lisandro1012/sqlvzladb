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
const estados_entitie_1 = require("../entities/estados.entitie");
//estados
function traerTodosEstados(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const get = yield estados_entitie_1.mostrarTodoEstados();
        if (!get)
            res.status(404).json(get);
        else
            res.status(202).json(get);
    });
}
exports.traerTodosEstados = traerTodosEstados;
function estadosPorId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const get = yield estados_entitie_1.showEstadosPorId(parseInt(req.params.id_estado));
        if (!get)
            res.status(404).json(get);
        else
            res.status(202).json(get);
    });
}
exports.estadosPorId = estadosPorId;
//municipios
function traerTodosMunicipios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const get = yield estados_entitie_1.showallmunicipios();
        if (!get)
            res.status(404).json(get);
        else
            res.status(202).json(get);
    });
}
exports.traerTodosMunicipios = traerTodosMunicipios;
function municipioID(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = req.params;
        const get = yield estados_entitie_1.municipiosPorId(parseInt(params.id_estado));
        if (!get)
            res.status(404).json(get);
        else
            res.status(202).json(get);
    });
}
exports.municipioID = municipioID;
//parroquias
function todasParroquias(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const get = yield estados_entitie_1.todasparroquia();
        if (!get)
            res.status(404).json(get);
        else
            res.status(202).json(get);
    });
}
exports.todasParroquias = todasParroquias;
function traerParroquias(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = req.params;
        const get = yield estados_entitie_1.traerParroquiasPorID(parseInt(params.id_parroquias));
        if (!get)
            res.status(404).json(get);
        else
            res.status(202).json(get);
    });
}
exports.traerParroquias = traerParroquias;
//# sourceMappingURL=estados.service.js.map