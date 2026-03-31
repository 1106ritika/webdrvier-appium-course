require('dotenv').config()
const { config } = require('./wdio.shared.conf.cjs');

//Browser stack credentials
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

//port to be removed as we are not running the test locally
//config.port= 4723,

config.specs = [
    '../test/specs/Real_iOS_App/iOS_To_Do_List_Screen.js'
];

config.capabilities = [
    {
        // capabilities for local Appium web tests on an iOS Simulator
        platformName: 'ios',
        'appium:deviceName': 'iPhone 16',
        'appium:platformVersion': '18.5',
        'appium:automationName': 'XCUITest',
        'appium:app': 'bs://69a85b3f21a32e1aacc8a8f5e44530d4ec9d4f90'
    }
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config;