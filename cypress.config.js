const { defineConfig } = require("cypress");

module.exports = defineConfig({
  requestTimeout: 1000,
  defaultCommandTimeout: 3000,
  pageLoadTimeout: 5000,
  env: {
    codeCoverage: {
      include: ['cypress/e2e/spec.cy.js']
    }
  },
  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      return require('@cypress/code-coverage/task')(on, config)
    },
  },
});
