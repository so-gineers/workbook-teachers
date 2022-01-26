// playwright.config.js
// @ts-check
const { devices } = require("@playwright/test");

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  use: {
    trace: "on",
    viewport: { width: 390, height: 844 },
    ignoreHTTPSErrors: true,
    video: "on",
    screenshot: "on",
  },
  projects: [
    {
      name: "Pixel 4",
      use: {
        browserName: "chromium",
        ...devices["Pixel 4"],
      },
    },
    {
      name: "iPhone 11",
      use: {
        browserName: "webkit",
        ...devices["iPhone 11"],
      },
    },
  ],
};

module.exports = config;
