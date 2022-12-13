import { connect } from "../data-source/mysql";

export async function mostrarTodoEstados() {
  try {
    const conn = await connect();
    const publish = await conn.query("SELECT estado FROM estados");
    return publish[0];
  } catch (err) {
    return err;
  }
}

export async function showEstadosPorId(id_estado: number) {
  try {
    const conn = await connect();
    const publish = await conn.query(
      `SELECT estado FROM estados WHERE id_estado = ${id_estado}`
    );
    return publish[0];
  } catch (err) {
    return err;
  }
}

//municipios

export async function showallmunicipios() {
  try {
    const conn = await connect();
    const publish = await conn.query("SELECT municipio FROM municipios");
    return publish[0];
  } catch (err) {
    return err;
  }
}

export async function municipiosPorId(id_estado: number) {
  try {
    const conn = await connect();
    // const publish = await conn.query(`SELECT municipio FROM municipios WHERE id_estado=${id_estado}`);old
    const publish = await conn.query(`SELECT  municipio, estado from municipios 
	INNER JOIN estados ON municipios.id_estado = estados.id_estado 
    WHERE  municipios.id_estado = ${id_estado}`);
    return publish[0];
  } catch (err) {
    return err;
  }
}

export async function todasparroquia() {
  try {
    const conn = await connect();
    const publish = await conn.query("SELECT parroquia FROM parroquias");
    return publish[0];
  } catch (err) {
    return err;
  }
}

export async function traerParroquiasPorID(id_parroquia: number) {
  try {
    const conn = await connect();
    // const publish = await conn.query(`SELECT municipio FROM municipios WHERE id_estado=${id_estado}`);old
    const publish =
      await conn.query(`SELECT estado, municipio , parroquia FROM parroquias
        INNER JOIN municipios ON parroquias.id_municipio = municipios.id_municipio
        INNER JOIN estados ON municipios.id_estado = estados.id_estado
        WHERE parroquias.id_municipio=${id_parroquia};`);
    return publish[0];
  } catch (err) {
    return err;
  }
}
