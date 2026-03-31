describe('Android Elements Test', () => {
    
    //Test Case 1
    it('Find Element by Accessibility id', async() => {
        //find element by accessibility id App
        //This line finds an element on the app having accessibility ID “App” . The tilde ~ symbol indicates that the “App” needs to be validated against accessbitilty ID. Then we are storing it in a variable named appOption. And we are using asynchronous code so we need to use await.
        const appOption = await $('~App');

        //click on element
        //This line will wait for the appOption and then will perform click operation on it.
        await appOption.click();

        //assertion
        //This line is finding Action Bar using accessibility ID and storing it in actionBar variable. Then it is asserting that actionBar is existing.
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    //Test Case 2
    it('Find Element by Class Name', async() =>{
        //find element on the screen with class name
        //$ sign finds just the first element
        const className = await $('android.widget.TextView');

        //this will fetch the class name and convert it to the text and print it
        //This will print just the first element on the screen with this class Name
        console.log(await className.getText());

        //Assertion
        //this will fetch the className and then compare it with the text 'API Demos'
        await expect(className).toHaveText('API Demos');
    });

    //Test Case 3
    it('FInd Element by XPath', async() => {
        //xpath = (//tagname[@attribute="value"]) or xpath = (//classname[@attribute=value])
        
        //find Alert Dialogs using content description and click on it
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //find list dialog using resource id and click on it
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find using Text and click on it
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by class and aassert it

        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    //Test Case 4
    it('Find Element by UIAutomator', async() => {
        //find element by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    //Test Case 5
    it('Find Multiple Elements', async() => {
        //array of storing all the elements of the list
        //expectedList is the expected result
        //actualList is what is visible over the app
        const expectedList = [
            'API Demos', "Access'ibility", 'Accessibility', 
            'Animation', 'App', 'Content', 
            'Graphics', 'Media', 'NFC', 
            'OS', 'Preference', 'Text', 'Views'
        ]
        const actualList = []

        //find multiple elements
        const textList = await $$('android.widget.TextView');

        //loop through all the elements
        for(const element of textList){
            actualList.push(await element.getText());
        }

        //asserting the list
        await expect(actualList).toEqual(expectedList);
    });

    //Test Case 6
    it('Enter Text in a field', async() => {
        //click on views
        await $('~Views').click();

        //click on Auto Complete
        await $('~Auto Complete').click();

        //click on screen top
        await $('~1. Screen Top').click();

        //access the country text field
        const countryTextField = await $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]');

        //enter the country name
        await countryTextField.addValue('Canada');

        //validate the country name is added
        await expect(countryTextField).toHaveText('Canada');
    });
})