describe('Notes', () => {
    it('Skip the tutorial', async() => {
            
        //click on skip button
        await $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        //verify the text after skipping the tutorial
        await expect($('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]')).toBeDisplayed();
    });

    it('Add Note, Save Changes, Verify Note', async() => {

        //access Add Note button
        await $('//android.widget.TextView[@text="Add note"]').click();

        //access the Text option
        await $('//android.widget.TextView[@text="Text"]').click();

        //validate the Editing word is present on the screen
        await expect($('//android.widget.TextView[@text="Editing"]')).toBeDisplayed();

        //add the locator of the title of the note to a variable
        const noteTitle = await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');

        //enter the title
        await noteTitle.setValue("Favorite Fruits");

        //2nd way to enter the title is
        //await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Favorite Fruits");

        //add node body
        await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Apple\nMango\nGrapes\nGuava");

        //setValue clears the value before adding whereas addValue just add the value directly

        //save the changes. Changes are saved by going back
        await driver.back();
        await driver.back();

        //verify the edit otpion
        await expect($('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();

        //this can be written as below as well
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();

        //verify the note is displayed
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toBeDisplayed();
        
        //verify the content of the note
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Apple\nMango\nGrapes\nGuava");
    });

    it('Delete the note', async() => {

        //pressing the back button to come on the notes list
        await driver.back();

        //storing the title of the note to a variable
        const noteTitle = await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        //click on the note
        await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        //click on ellipses (more) icon
        await $('~More').click();

        //click on delete icon
        await $('//*[@text="Delete"]').click();

        //accept the alert
        await driver.acceptAlert();

        //click on nav icon
        await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //click on trash can icon
        await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Trash Can"]').click();

        //store the title of the first deleted node to a variable
        const deletedNoteTitle = await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        //validate that the deleted note is present here
        await expect(deletedNoteTitle).toEqual(noteTitle);
    });
});