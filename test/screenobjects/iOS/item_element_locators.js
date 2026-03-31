class ItemElementLocators {

    get createItemBtn() {
        return $('//XCUIElementTypeStaticText[@name="Create item"]');
    }

    get addTitleValue() {
        return $('//XCUIElementTypeTextField[@value="Title"]');
    }

    get addDueDateValue() {
        return $('//XCUIElementTypeTextField[@value="Due"]');
    }

    get selectDateValue() {
        return $('~29');
    }

    get doneBtn() {
        return $('~Done');
    }

    get createBtn() {
        return $('~Create');
    }

    async getByAccessibilityID(name) {
        return $(`${name}`);
    }
}

export default new ItemElementLocators();