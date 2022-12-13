import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { PORT } from "./config";
function init() {
  app.listen(PORT);

  console.log("Server on port", PORT);
}
init();
