const { config } = require('./wdio.shared.conf');


// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        browserName: 'Chrome',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        'appium:deviceName': 'Pixel 3 API 30',
        'appium:platformVersion': '11',
        'appium:orientation': 'PORTRAIT',
        // `automationName` will be mandatory, see
        // https://github.com/appium/appium/releases/tag/v1.13.0
        'appium:automationName': 'UiAutomator2',
        'appium:newCommandTimeout': 240,
        'goog:chromeOptions': {
            w3c: true,
            // Add this option to prevent the annoying "Welcome"-message
            args: ["--no-first-run",'--no-initial-navigation'],
        },
    },
];

console.log(config.path)

exports.config = config;
