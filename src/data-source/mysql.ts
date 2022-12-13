//import { createPool, Pool } from "mysql2/promise";
import { createPool, Pool } from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT } from "../config";

export async function connect(): Promise<Pool> {
  const connection = await createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
  });
  return connection;
}

connect();
