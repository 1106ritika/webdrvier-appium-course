import edit_notes from "../../screenobjects/android/edit_notes";

describe('Web Browser Tests', () => {

    before (async() => {
        await edit_notes.skipTutorial();
    });

    it('Accessing the external link', async() => {
        await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Like us on Facebook"]').click();

        //get current context
        console.log(await driver.getContext());

        await driver.pause(5000);
        
        //get all contexts
        console.log(await driver.getContexts());

        //switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome');

        //switch to app context
        await driver.switchContext('NATIVE_APP');

        //coming back to the app
        await driver.back();

        await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Notes"]').click();

        const addNoteText = await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]');

        await expect(addNoteText).toBeDisplayed();

        // await $('//android.widget.Button[@package="com.android.chrome"]').click();
        // const coverImage = await $('.profileCoverPhoto');
        // await expect(coverImage).toBeDisplayed();
    });
});