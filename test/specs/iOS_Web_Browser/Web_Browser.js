describe('iOS Web View', () => {
    it('Web View', async() => {
        await $('~Webview').click();

        // await driver.getContext();
        // await driver.pause(5000);
        // await driver.getContexts();
        // await driver.pause(5000);
        // await driver.getContexts();

        //wait until you get multiple contexts. it will return true or false to close the loop
        //it will return true if the number of contexts is greater than 1 and false if the number of contexts is less than or equal to 1 
        //it will wait for 30 sec before returing the false error message
        await driver.waitUntil(async() => {
            const contexts = await driver.getContexts();
            return contexts.length > 1;
        }, {timeout: 30000, timeoutMsg: 'Timed out waiting for another context'});

        //storing the contexts list in a constant
        const contexts = await driver.getContexts();

        //switching the context to the second element of the context list which is at the 1st index
        await driver.switchContext(contexts[1]);

        //assertion
        const subtitleText = await $('.hero__subtitle').getText();
        await expect(subtitleText).toContain('automation');  

        //switch back to app
        await driver.switchContext('NATIVE_APP');
        await $('~Home').click();

        //assertion
        const webdriverText = await $('(//XCUIElementTypeStaticText[@name="WEBDRIVER"])');
        await expect(webdriverText).toBeDisplayed();
    });
});