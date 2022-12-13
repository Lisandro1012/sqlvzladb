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
function mostrarTodoEstados() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield mysql_1.connect();
            const publish = yield conn.query("SELECT estado FROM estados");
            return publish[0];
        }
        catch (err) {
            return err;
        }
    });
}
exports.mostrarTodoEstados = mostrarTodoEstados;
function showEstadosPorId(id_estado) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield mysql_1.connect();
            const publish = yield conn.query(`SELECT estado FROM estados WHERE id_estado = ${id_estado}`);
            return publish[0];
        }
        catch (err) {
            return err;
        }
    });
}
exports.showEstadosPorId = showEstadosPorId;
//municipios
function showallmunicipios() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield mysql_1.connect();
            const publish = yield conn.query("SELECT municipio FROM municipios");
            return publish[0];
        }
        catch (err) {
            return err;
        }
    });
}
exports.showallmunicipios = showallmunicipios;
function municipiosPorId(id_estado) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield mysql_1.connect();
            // const publish = await conn.query(`SELECT municipio FROM municipios WHERE id_estado=${id_estado}`);old
            const publish = yield conn.query(`SELECT  municipio, estado from municipios 
	INNER JOIN estados ON municipios.id_estado = estados.id_estado 
    WHERE  municipios.id_estado = ${id_estado}`);
            return publish[0];
        }
        catch (err) {
            return err;
        }
    });
}
exports.municipiosPorId = municipiosPorId;
function todasparroquia() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield mysql_1.connect();
            const publish = yield conn.query("SELECT parroquia FROM parroquias");
            return publish[0];
        }
        catch (err) {
            return err;
        }
    });
}
exports.todasparroquia = todasparroquia;
function traerParroquiasPorID(id_parroquia) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield mysql_1.connect();
            // const publish = await conn.query(`SELECT municipio FROM municipios WHERE id_estado=${id_estado}`);old
            const publish = yield conn.query(`SELECT estado, municipio , parroquia FROM parroquias
        INNER JOIN municipios ON parroquias.id_municipio = municipios.id_municipio
        INNER JOIN estados ON municipios.id_estado = estados.id_estado
        WHERE parroquias.id_municipio=${id_parroquia};`);
            return publish[0];
        }
        catch (err) {
            return err;
        }
    });
}
exports.traerParroquiasPorID = traerParroquiasPorID;
//# sourceMappingURL=estados.entitie.js.map