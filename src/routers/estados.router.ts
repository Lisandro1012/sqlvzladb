import { Router } from "express";
import {
  traerTodosEstados,
  estadosPorId,
  traerTodosMunicipios,
  municipioID,
  todasParroquias,
  traerParroquias,
} from "../services/estados.service";

const router = Router();
//estados
router.route("/").get(traerTodosEstados);
//municipios
router.route("/municipios").get(traerTodosMunicipios);

//parroquias
router.route("/municipios/parroquias").get(todasParroquias);

//Especiales o busacar
//estado
router.route("/:id_estado").get(estadosPorId);
//municipios
router.route("/:id_estado/municipios").get(municipioID);

//parroquias
router.route("/municipios/parroquias/:id_parroquias").get(traerParroquias);

export default router;
