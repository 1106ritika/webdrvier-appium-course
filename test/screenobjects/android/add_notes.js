//creating a class
class AddNotesScreen{

    //creating a get for skip button
    get skipBtn() {
        return $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    //creating a get for Add note text
    get addNoteText() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]');
    }

    //creating a get for add note button
    get addNoteButton() {
        return $('//android.widget.TextView[@text="Add note"]');
    }

    //locator for text option
    get textOption() {
        return $('//android.widget.TextView[@text="Text"]');
    }

    //locator for editing word
    get editingWord() {
        return $('//android.widget.TextView[@text="Editing"]');
    }

    //locator for note title in edit screen
    get noteTitleInEditScreen() {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    //locator for node body
    get noteBody() {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    //locator for edit button
    get editButton() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    //locator for view button
    get viewButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    //locator for note content
    get noteContent() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    //locator for note title
    get noteTitle() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    //locaotr for more button
    get moreButton() {
        return $('~More');
    }

    //locator for delete icon
    get deleteIcon() {
        return $('//*[@text="Delete"]');
    }

    //locator for nav icon
    get navIcon() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    //locator for trash can icon
    get trashCanIcon() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Trash Can"]');
    }

    //function to save note
    async saveNote() {
        await driver.back();
        await driver.back();
    }
}

//enabling this class to get exported in other files
export default new AddNotesScreen();