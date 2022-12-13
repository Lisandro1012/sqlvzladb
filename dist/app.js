"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
// import fileUpload from "express-fileupload";
//import AuthController from './routes/auth'
const estados_router_1 = __importDefault(require("./routers/estados.router"));
const app = express_1.default();
// settings
app.set("port", 3000 || process.env.PORT);
// Middlewares
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
// app.use(fileUpload());
// Routes
app.use("/estados", estados_router_1.default);
//app.use('/api/auth', AuthController);
//app.use('/seller', RouteSeller);
//app.use('/publish', RoutePublish);
exports.default = app;
//# sourceMappingURL=app.js.map