require('dotenv').config()
const { config } = require('./wdio.shared.conf.cjs');

//Browser stack credentials
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

//port to be removed as we are not running the test locally
//config.port = 4723,

config.specs = [
        '../test/specs/Real_Android_App/Android_Real_App_Delete.js'
    ];

config.capabilities = [
    {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Samsung Galaxy S22 Ultra',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://69a85b3f21a32e1aacc8a8f5e44530d4ec9d4f90',
        'appium:autoGrantPermissions': true
    }
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config;