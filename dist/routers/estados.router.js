"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estados_service_1 = require("../services/estados.service");
const router = express_1.Router();
//estados
router.route("/").get(estados_service_1.traerTodosEstados);
//municipios
router.route("/municipios").get(estados_service_1.traerTodosMunicipios);
//parroquias
router.route("/municipios/parroquias").get(estados_service_1.todasParroquias);
//Especiales o busacar
//estado
router.route("/:id_estado").get(estados_service_1.estadosPorId);
//municipios
router.route("/:id_estado/municipios").get(estados_service_1.municipioID);
//parroquias
router.route("/municipios/parroquias/:id_parroquias").get(estados_service_1.traerParroquias);
exports.default = router;
//# sourceMappingURL=estados.router.js.map