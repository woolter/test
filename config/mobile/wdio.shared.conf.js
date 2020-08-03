const video = require('wdio-video-reporter');

exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 90000,
        requires: ['ts-node/register', 'tsconfig-paths/register'],
    },
    specs: [
        './test/specs/**/*.ts'
    ],
    sync: true,
    logLevel: 'debug',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 1,
    reporters: [
        'spec',
        [video, {
          saveAllVideos: true,       // If true, also saves videos for successful test cases
          videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
          videoRenderTimeout: 5,      // Max seconds to wait for a video to finish rendering
        }],
        ['allure', {
          outputDir: './_results_/allure-raw',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: true,
        }],
      ],

    // ====================
    // Appium Configuration
    // ====================
    services: [
        [
            'appium',
            {
            // For options see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                args: {
                // For arguments see
                // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                },
                command: 'appium',
                logPath : './appium_logs/',
            },
        ],
    ],
    port: 4723,
};
