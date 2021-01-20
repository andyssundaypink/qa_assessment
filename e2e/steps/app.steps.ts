const { Given, When, Then } = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

const searchFormPO = require('../page-objects/search-form.po');

Given('I navigate to {string}', { timeout: 60 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
});

When('I search for {string} name', { timeout: 60 * 1000 }, async (string) => {
    await searchFormPO.input.sendKeys(string);
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});

When('I search for planet {string}', { timeout: 60 * 1000 }, async (string) => {
    await searchFormPO.planetRadioBtn.click();
    await searchFormPO.input.sendKeys(string);
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});

Then('I see character with {string} details', { timeout: 60 * 1000 }, async (string) => {
    let allCharactersNameElements = await searchFormPO.allCharactersName;
    for(let i = 0; i < allCharactersNameElements.length; i++){
        console.log(allCharactersNameElements[i].getAttribute('innerText'));
        await chai.expect(allCharactersNameElements[i].getAttribute('innerText'))
        .to.eventually.contain(string);
    }
});

Then('I see planet with {string} details', { timeout: 60 * 1000 }, async (string) => {
    let allCharactersNameElements = await searchFormPO.allPlanetsName;
    for(let i = 0; i < allCharactersNameElements.length; i++){
        await chai.expect(allCharactersNameElements[i].getAttribute('innerText'))
        .to.eventually.contain(string);
    }
});
