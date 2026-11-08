/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:3000",
    video: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss",
    },
    projectId: "8gi3z6",
    defaultCommandTimeout: 10000,
    env: {
      email: process.env.CYPRESS_EMAIL || "",
      senha: process.env.CYPRESS_PASSWORD || "",
      api_login: process.env.CYPRESS_API_LOGIN || "http://localhost:8080/auth/login",
      api_clinica: process.env.CYPRESS_API_CLINICA || "http://localhost:8080/clinica",
      api_especialista: process.env.CYPRESS_API_ESPECIALISTA || "http://localhost:8080/especialista",
      requestMode: true,
    },
  },
});
