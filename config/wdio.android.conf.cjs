const path = require('path');
const { config } = require('./wdio.shared.conf.cjs');

config.port = 4723,

config.specs = [
    path.resolve('./test/specs/Real_Android_App/Android_Real_App_Delete.js')
];

config.capabilities = [
    {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Pixel 9',
        'appium:platformVersion': '15.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true
    }
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [['appium', {
    args: {
        relaxedSecurity: true
    },
    logPath: './'
}]];

exports.config = config;