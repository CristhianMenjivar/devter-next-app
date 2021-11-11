const environment = process.env.environment;

const isProduction = environment === "prod";

const URL_BASE = isProduction ? process.env.apiUrlProd : process.env.apiUrlDev;

export { URL_BASE, isProduction };
