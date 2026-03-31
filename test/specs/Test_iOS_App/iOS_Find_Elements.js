describe('iOS - Finding Elements', () => {
    it('Finding element by Accessibility ID', async() => {
        await $('~Alert Views').click();

        await $('~Simple').click();

        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    //elements can be find by using the TYPE
    it('Finding element by class name or tag name', async() => {
        console.log(await $('XCUIElementTypeStaticText').getText());

        const textEls = await $$('XCUIElementTypeStaticText');

        for (const element of textEls) {
            console.log(await element.getText());
        }
    });

    it('Finding element by xpath', async() => {
        await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();

        await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    //elements using class chain
    //we need to tell appium and webdriverIO that we are using class chain
    it('Finding element by Class Chain', async() => {
        const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]';
        //const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';

        await $(`-ios class chain:${alertText}`).click();

        await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('Finding elements by predicate string', async() => {
        //const alertText = 'name == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "alert"';

        await $(`-ios predicate string:${alertText}`).click();

        await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('Search Input Field', async() => {
        await $('~Search').click();

        await $('~Default').click();

        await $('//XCUIElementTypeSearchField').addValue("Good");

        await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value");

        await $('~Clear text').click();

        await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value");
    });

    it('Accepting Alerts', async() => {
        await $('~Alert Views').click();

        await $('~Okay / Cancel').click();

        await $('~OK').click();
        //await driver.acceptAlert();
        //await driver.dismissAlert();

        await expect($('~OK')).not.toExist();
    });

    it('Dismissing Alerts', async() => {
        await $('~Alert Views').click();

        await $('~Okay / Cancel').click();

        console.log(await driver.getAlertText());

        await driver.dismissAlert();

        await expect($('~OK')).not.toExist();
    });

    //we need to paas scroll direction and element ID for scrolling in iOS
    it('Scrolling', async() => {
        //first way
        //directions can be down, up, left, right
        // await driver.execute('mobile: scroll', {direction: "down"});
        // await driver.execute('mobile: scroll', {direction: "up"});

        //second way
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');

        await driver.execute('mobile: scroll', {element: redPicker.elementID, direction: "down"});

        const greenPicker = await $('~Green color component value');

        await driver.execute('mobile: scroll', {element: greenPicker.elementID, direction: "up"});

        const bluePicker = await $('~Blue color component value');

        await driver.execute('mobile: scroll', {element: bluePicker.elementID, direction: "up"});
    });

    it.only('Picker', async() => {
        //selecting purple color with rgb value 125,0,125. This will require 
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');

        await redPicker.addValue('125');

        const greenPicker = await $('~Green color component value');
        
        await greenPicker.addValue('0');

        const bluePicker = await $('~Blue color component value');

        await bluePicker.addValue('125');
    });
});