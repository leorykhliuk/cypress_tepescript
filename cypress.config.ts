import { defineConfig } from "cypress";

require('dotenv').config(); // use dot env

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter', // added to change reporter
  video: true, // record video
  env: {...process.env}, // use dot env
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // added to change reporter
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
    // baseUrl: 'https://www.target.com/',
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {
        logLevel: "ERROR", // seems like doesn't work
    }
  },
});
