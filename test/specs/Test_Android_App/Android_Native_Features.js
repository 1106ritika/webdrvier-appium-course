describe('Android Native Features Test', () => {

    //Test Case 01
    it('Access app Activity ', async() => {

        //use driver command with startActivity and give packageName and activityName as arguments to startActivity to open that particular screen
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

        //add pause
        await driver.pause(3000);

        //validate the page heading is present on the screen
        await expect($('//android.widget.TextView[@text="App/Alert Dialogs"]')).toExist();       
    });

    //Test Case 02
    it('Accept Dialog Box', async() => {

        //use driver command with startActivity and give packageName and activityName as arguments to startActivity to open that particular screen
        //await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

        //click on the first dialog
        await $('~OK Cancel dialog with a message').click();

        //get alert text from dialog
        console.log('Alert Text ---> ', await driver.getAlertText());

        //accept alert. For it, use acceptAlert() option of the driver
        await driver.acceptAlert();

        //assert to validate alert box is no longer visible
        await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toExist();
    }); 

    //Test Case 03
    it('Dismiss Dialog Box', async() => {

        //use driver command with startActivity and give packageName and activityName as arguments to startActivity to open that particular screen
        //await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

        //click on the first dialog
        await $('~OK Cancel dialog with a message').click();

        //dismiss alert. For it, use dismissAlert() option of the driver
        await driver.dismissAlert();

        //assert to validate alert box is no longer visible
        await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toExist();
    }); 

    //Test Case 04
    it('Click on OK button of Dialog Box', async() => {

        //use driver command with startActivity and give packageName and activityName as arguments to startActivity to open that particular screen
        //await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

        //click on the first dialog
        await $('~OK Cancel dialog with a message').click();

        //click on OK button
        await $('//android.widget.Button[@resource-id="android:id/button1"]').click();

        //assert to validate alert box is no longer visible
        await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toExist();
    }); 

    //Test Case 05
    it('Vertical Scrolling to the end', async() => {

        //click on app
        await $('~App').click();

        //click on activity
        await $('~Activity').click();

        //scrollToEnd(int maxSwipes, int steps)
        //'android=...' : This tells Appium to Use Android UIAutomator strategy to perform action
        //UiSelector().scrollable(true) : This finds a scrollable container like a list
        //.scrollToEnd(1,5) : 1 means maximum number of scroll attempts. 5 means steps per swipe (speed of scroll). 1 Steps means very fast scrolling. If I set it (1,5) then the scrolling will be at speed 5 and maximun number of scrolls is 1.
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

        //click on secure surfaces
        await $('~Secure Surfaces').click();

        //validate if a text is present on the resultant screen
        await expect($('~Secure Dialog')).toExist();
    });

    //Test Case 06
    it('Vertical Scrolling to a particular text', async() => {

        //click on app
        await $('~App').click();

        //click on activity
        await $('~Activity').click();

        //scrollTextIntoView(@NonNull String text)
        //'android=...' : This tells Appium to Use Android UIAutomator strategy to perform action
        //UiSelector().scrollable(true) : This finds a scrollable container like a list
        //.scrollTextIntoView("Secure Surfaces") : It means scroll on the screen till you locate "Secure Surfaces" text
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //validate if a text is present on the resultant screen
        await expect($('~Secure Dialog')).toExist();
    });

    //Test Case 07
    it('Horizontal Scrolling in forward direction', async() => {

        //directly access Views Screen
        //appenind package name and activity name is optional. this will work without package name as well
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

        //scrollForward
        //setAsHorizontalList() signifies that the list is horizontal
        //scrollForward() signifies to do a swipe in the forward direction
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await driver.pause(3000);
    });

    //Test Case 08
    it('Horizontal Scrolling in backward direction', async() => {

        //directly access Views Screen
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

        //scrollBackward signifies to do a swipe in the backward direction
        //to scroll backward it needs a scroll forward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000);
    });

    //Test Case 09
    it.only('Access Date Widget', async() => {

        //directly access Date widget
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");

        //get current date element and store it in a variable
        const date = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]');

        //fetch the text from date element and store it in a variable
        const CurrentDate = await date.getText();

        //click on change date button
        await $('~change the date').click();

        //scroll to the right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //select the 10th date
        await $('//android.view.View[@text="10"]').click();

        //click on Ok button
        await $('//android.widget.Button[@resource-id="android:id/button1"]').click();

        //Compare the new current date with the old current date
        await expect(await date.getText()).not.toEqual(CurrentDate);
    });
});