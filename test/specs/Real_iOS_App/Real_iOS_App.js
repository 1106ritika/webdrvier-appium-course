import {$, expect} from "@wdio/globals";

describe('Real iOS App', () => {
    it('Create a To-do list', async() => {
        await $('//XCUIElementTypeStaticText[@name="Create list"]').click();
        await $('//XCUIElementTypeTextField[@value="List Name"]').addValue("Things to do today:");
        await $('~Create').click();
        await expect($('~Things to do today:')).toBeExisting();
    });

    it('Create To-do items', async() => {
        await $('~Things to do today:').click();
        await $('//XCUIElementTypeStaticText[@name="Create item"]').click();
        await $('//XCUIElementTypeTextField[@value="Title"]').addValue("Morning Walk");
        await $('//XCUIElementTypeTextField[@value="Due"]').click();
        await $('~29').click();
        await $('~Done').click();
        await $('~Create').click();
        await expect($('~Morning Walk')).toBeExisting();
        await expect($('~Due 29 March 2026')).toBeExisting();
    });
});