class ListElementLocators {

    get createListBtn() {
        return $('//XCUIElementTypeStaticText[@name="Create list"]');
    }

    get listNameInput() {
        return $('//XCUIElementTypeTextField[@value="List Name"]');
    }

    get createBtn() {
        return $('~Create');
    }

    listNameField(name) {
        return $(`~${name}`);
    }
}

export default new ListElementLocators();