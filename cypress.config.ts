import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/index.ts",
    specPattern: "cypress/integration/**/*.spec.ts",
  },
});
