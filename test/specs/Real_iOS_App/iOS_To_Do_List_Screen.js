// const element_locators = require("./element_locators").default;
// const item_element_locators = require("./item_element_locators").default;

import element_locators from "../../screenobjects/iOS/element_locators";
import item_element_locators from "../../screenobjects/iOS/item_element_locators";

import { expect } from "@wdio/globals";

describe('Real iOS App', () => {
    before(async () => {
        //await $('//XCUIElementTypeStaticText[@name="Create list"]').click();
        await element_locators.createListBtn.click();

        //await $('//XCUIElementTypeTextField[@value="List Name"]').addValue("Things to do today:");
        await element_locators.listNameInput.addValue("Things to do today:");

        //await $('~Create').click();
        await element_locators.createBtn.click();

        //await expect($('~Things to do today:')).toBeExisting();
        await expect(element_locators.listNameField("Things to do today:")).toBeExisting();

        //await $('~Things to do today:').click();
        await element_locators.listNameField("Things to do today:").click();
    });

    // it('Create a To-do list', async () => {
    //     //await $('//XCUIElementTypeStaticText[@name="Create list"]').click();
    //     await element_locators.createListBtn.click();

    //     //await $('//XCUIElementTypeTextField[@value="List Name"]').addValue("Things to do today:");
    //     await element_locators.listNameInput.addValue("Things to do today:");

    //     //await $('~Create').click();
    //     await element_locators.createBtn.click();

    //     //await expect($('~Things to do today:')).toBeExisting();
    //     await expect(element_locators.listNameField("Things to do today:")).toBeExisting();
    // });

    it('Create To-do items', async () => {
        // //await $('~Things to do today:').click();
        // await element_locators.listNameField("Things to do today:").click();

        //await $('//XCUIElementTypeStaticText[@name="Create item"]').click();
        await item_element_locators.createItemBtn.click();

        //await $('//XCUIElementTypeTextField[@value="Title"]').addValue("Morning Walk");
        await item_element_locators.addTitleValue.addValue("Morning Walk");

        //await $('//XCUIElementTypeTextField[@value="Due"]').click();
        await item_element_locators.addDueDateValue.click();

        //await $('~29').click();
        await item_element_locators.selectDateValue.click();

        //await $('~Done').click();
        await item_element_locators.doneBtn.click();

        //await $('~Create').click();
        await item_element_locators.createBtn.click();

        //await expect($('~Morning Walk')).toBeExisting();
        await expect(await item_element_locators.getByAccessibilityID("~Morning Walk")).toBeExisting();

        //await expect($('~Due 29 March 2026')).toBeExisting();
        await expect(await item_element_locators.getByAccessibilityID("~Due 29 March 2026")).toBeExisting();
    });
});