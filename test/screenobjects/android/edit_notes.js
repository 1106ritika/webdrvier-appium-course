//const add_notes = require("./add_notes").default;

import add_notes from "./add_notes";

class EditNotesScreen {
    async skipTutorial() {
        //click on skip button
        await add_notes.skipBtn.click();

        //verify the text after skipping the tutorial
        await expect(add_notes.addNoteText).toBeDisplayed();
    }

    async AddAndSaveNote(noteHeading, noteBody) {
        //access Add Note button
        await add_notes.addNoteButton.click();

        //access the Text option
        await add_notes.textOption.click();

        //validate the Editing word is present on the screen
        await expect(add_notes.editingWord).toBeDisplayed();

        //add the locator of the title of the note to a variable
        const noteTitle = await add_notes.noteTitleInEditScreen;

        //enter the title
        await noteTitle.setValue(noteHeading);

        //add node body
        await add_notes.noteBody.addValue(noteBody);

        //save the changes. Changes are saved by going back
        await add_notes.saveNote();

        //verify the edit otpion
        await expect(add_notes.editButton).toBeDisplayed();

        //verify the note is displayed
        await expect(add_notes.viewButton).toBeDisplayed();

        //verify the content of the note
        await expect(add_notes.noteContent).toHaveText("Apple\nMango\nGrapes\nGuava");
    }
}

//ESM Config
export default new EditNotesScreen();

//JS config
//module.exports = new EditNotesScreen();