"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
function init() {
    app_1.default.listen(config_1.PORT);
    console.log("Server on port", config_1.PORT);
}
init();
//# sourceMappingURL=index.js.map