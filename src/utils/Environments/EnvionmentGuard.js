"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ENV = void 0;
const NODE_ENV = (nodeEnv) => {
    const environments = ['development', 'production'];
    if (!environments.includes(nodeEnv !== null && nodeEnv !== void 0 ? nodeEnv : '')) {
        throw new Error(`Invalid NODE_ENV: "process.env.NODE_ENV". Allowed values: "${environments.join(',')}"`);
    }
    return nodeEnv;
};
exports.NODE_ENV = NODE_ENV;
