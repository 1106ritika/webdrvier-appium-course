//const add_notes = require("./add_notes").default;
//const edit_notes = require("./edit_notes");

import add_notes from "../../screenobjects/android/add_notes";
import edit_notes from "../../screenobjects/android/edit_notes";

describe('Notes', () => {

    before(async () => {
        await edit_notes.skipTutorial();
        await edit_notes.AddAndSaveNote("Favorite Fruits", "Apple\nMango\nGrapes\nGuava");

        //pressing the back button to come on the notes list
        await driver.back();
    });

    // beforeEach(async () => {
    //     console.log('Before each hook');
    // });

    // after(async () => {
    //     console.log('After hook');
    // });

    // afterEach(async () => {
    //     console.log('After each hook');
    // });

    it('Delete the note', async () => {

        // await edit_notes.skipTutorial();
        // await edit_notes.AddAndSaveNote("Favorite Fruits", "Apple\nMango\nGrapes\nGuava");

        // //pressing the back button to come on the notes list
        // await driver.back();

        //storing the title of the note to a variable
        //const noteTitle = await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
        const noteTitle = await (add_notes.noteTitle).getText();

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

    // it('test 1', async() => {

    // });

    // it('test 2', async() => {

    // });
});