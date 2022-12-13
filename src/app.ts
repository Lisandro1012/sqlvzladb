import express, { Application } from "express";
import morgan from "morgan";
// import fileUpload from "express-fileupload";

//import AuthController from './routes/auth'
import RouteEstados from "./routers/estados.router";
const app: Application = express();

// settings
app.set("port", 3000 || process.env.PORT);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
// app.use(fileUpload());

// Routes

app.use("/estados", RouteEstados);
//app.use('/api/auth', AuthController);
//app.use('/seller', RouteSeller);
//app.use('/publish', RoutePublish);

export default app;
