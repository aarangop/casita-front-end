import { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://localhost:8001/v3/api-docs",
  apiFile: "./src/store/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFile: "./src/store/casitaApi.ts",
  exportName: "casitaApi",
  hooks: { queries: true, lazyQueries: true, mutations: true },
  tag: true,
};

export default config;
