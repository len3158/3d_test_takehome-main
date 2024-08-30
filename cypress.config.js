const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    requestTimeout: 1000,
    defaultCommandTimeout: 3000,
    pageLoadTimeout: 5000,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      // implement node event listeners here
      return config
    },
  },
});
