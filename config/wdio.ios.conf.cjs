const path = require('path');
const { config } = require('./wdio.shared.conf.cjs');

config.port= 4723,

config.specs = [
    path.resolve('./test/specs/Real_iOS_App/iOS_To_Do_List_Screen.js')
];

config.capabilities = [
    {
        // capabilities for local Appium web tests on an iOS Simulator
        platformName: 'ios',
        'appium:deviceName': 'iPhone 16',
        'appium:platformVersion': '18.5',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'app/iOS/MVCTodo.app')
    }
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];

exports.config = config;