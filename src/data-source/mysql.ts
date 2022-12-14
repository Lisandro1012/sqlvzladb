//import { createPool, Pool } from "mysql2/promise";
import { createPool, Pool } from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT } from "../config";

export async function connect(): Promise<Pool> {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: "josePass1012$",
    database: "venezuladb",
    // host: "localhost:3306",
    // user: "root",
    // password: "Jose1012$",
    // database: "venezuladb",

    // host: "containers-us-west-104.railway.app",
    // user: "root",
    // password: "OTJVS2vtQnTikEFi8uym",
    // database: "railway",
    // port: 3306,

    // user: DB_USER,
    // password: DB_PASSWORD,
    // host: DB_HOST,
    // port: DB_PORT,
    // database: DB_NAME,
  });

  connection.query("SELECT * FROM estados");

  return connection;
}

connect();
