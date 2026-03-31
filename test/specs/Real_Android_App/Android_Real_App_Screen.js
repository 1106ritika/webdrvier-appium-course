//const add_notes = require("./add_notes").default;

import add_notes from "./add_notes";

describe('Notes', () => {
    it('Skip the tutorial', async() => {
            
        //click on skip button
        //await $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        //using locator from another file
        await add_notes.skipBtn.click();

        //verify the text after skipping the tutorial
        //await expect($('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]')).toBeDisplayed();
        await expect(add_notes.addNoteText).toBeDisplayed();
    });

    it('Add Note, Save Changes, Verify Note', async() => {

        //access Add Note button
        //await $('//android.widget.TextView[@text="Add note"]').click();
        await add_notes.addNoteButton.click();

        //access the Text option
        //await $('//android.widget.TextView[@text="Text"]').click();
        await add_notes.textOption.click();

        //validate the Editing word is present on the screen
        //await expect($('//android.widget.TextView[@text="Editing"]')).toBeDisplayed();
        await expect(add_notes.editingWord).toBeDisplayed();

        //add the locator of the title of the note to a variable
        //const noteTitle = await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
        const noteTitle = await add_notes.noteTitleInEditScreen;

        //enter the title
        await noteTitle.setValue("Favorite Fruits");

        //2nd way to enter the title is
        //await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Favorite Fruits");

        //add node body
        //await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Apple\nMango\nGrapes\nGuava");
        await add_notes.noteBody.addValue("Apple\nMango\nGrapes\nGuava");

        //setValue clears the value before adding whereas addValue just add the value directly

        //save the changes. Changes are saved by going back
        // await driver.back();
        // await driver.back();
        await add_notes.saveNote();

        //verify the edit otpion
        //await expect($('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect(add_notes.editButton).toBeDisplayed();

        //this can be written as below as well
        //await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();

        //verify the note is displayed
        //await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toBeDisplayed();
        await expect(add_notes.viewButton).toBeDisplayed();

        //verify the content of the note
        //await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Apple\nMango\nGrapes\nGuava");
        await expect(add_notes.noteContent).toHaveText("Apple\nMango\nGrapes\nGuava");
    });

    xit.only('Delete the note', async() => {

        //pressing the back button to come on the notes list
        await driver.back();

        //storing the title of the note to a variable
        //const noteTitle = await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
        const noteTitle = await(add_notes.noteTitle).getText();

        //click on the note
        //await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();
        await add_notes.noteTitle.click();

        //click on ellipses (more) icon
        //await $('~More').click();
        await add_notes.moreButton.click();

        //click on delete icon
        //await $('//*[@text="Delete"]').click();
        await add_notes.deleteIcon.click();

        //accept the alert
        await driver.acceptAlert();

        //click on nav icon
        //await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await add_notes.navIcon.click();

        //click on trash can icon
        //await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Trash Can"]').click();
        await add_notes.trashCanIcon.click();

        //store the title of the first deleted node to a variable
        //const deletedNoteTitle = await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
        const deletedNoteTitle = await add_notes.noteTitle.getText();

        //validate that the deleted note is present here
        await expect(deletedNoteTitle).toEqual(noteTitle);
    });
});