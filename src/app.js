"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointUrl = void 0;
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./utils/logger"));
const controller_routes_1 = __importDefault(require("./routes/controller.routes"));
const swagger_1 = __importDefault(require("./utils/swagger"));
const express_response_formatter_1 = require("express-response-formatter");
const dotenv = __importStar(require("dotenv"));
const EnvironmentVar_1 = require("./utils/Environments/EnvironmentVar");
const path_1 = __importDefault(require("path"));
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: path_1.default.resolve(__dirname, `../.env.${env}`) });
logger_1.default.info({ NODE_ENV: EnvironmentVar_1.NODE_ENV });
logger_1.default.info({ isProduction: EnvironmentVar_1.isProduction, isDevelopment: EnvironmentVar_1.isDevelopment });
exports.endpointUrl = process.env.URI_OPC;
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, express_response_formatter_1.responseEnhancer)());
app.listen(PORT, async () => {
    logger_1.default.info(`App is running at http://localhost:${PORT}`);
    (0, controller_routes_1.default)(app);
    (0, swagger_1.default)(app, PORT);
});
