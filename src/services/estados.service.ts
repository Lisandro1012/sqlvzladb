import { Request, Response } from "express";
import {
  mostrarTodoEstados,
  showEstadosPorId,
  showallmunicipios,
  municipiosPorId,
  todasparroquia,
  traerParroquiasPorID,
} from "../entities/estados.entitie";

//estados
export async function traerTodosEstados(req: Request, res: Response) {
  const get = await mostrarTodoEstados();
  if (!get) res.status(404).json(get);
  else res.status(202).json(get);
}

export async function estadosPorId(req: Request, res: Response) {
  const get = await showEstadosPorId(parseInt(req.params.id_estado));
  if (!get) res.status(404).json(get);
  else res.status(202).json(get);
}

//municipios
export async function traerTodosMunicipios(req: Request, res: Response) {
  const get = await showallmunicipios();
  if (!get) res.status(404).json(get);
  else res.status(202).json(get);
}

export async function municipioID(req: Request, res: Response) {
  const params = req.params;
  const get = await municipiosPorId(parseInt(params.id_estado));
  if (!get) res.status(404).json(get);
  else res.status(202).json(get);
}

//parroquias

export async function todasParroquias(req: Request, res: Response) {
  const get = await todasparroquia();
  if (!get) res.status(404).json(get);
  else res.status(202).json(get);
}

export async function traerParroquias(req: Request, res: Response) {
  const params = req.params;
  const get = await traerParroquiasPorID(parseInt(params.id_parroquias));
  if (!get) res.status(404).json(get);
  else res.status(202).json(get);
}
