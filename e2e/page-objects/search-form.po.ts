import { element, by } from 'protractor';

module.exports = {
    get input() {
        return element(by.id('query'));
    },
    get searchBtn() {
        return element(by.css('button'));
    },
    get peopleRadioBtn() {
        return element(by.id('people'));
    },
    get allCharactersName() {
        return element.all(by.css('app-character h6'));
    },
    get planetRadioBtn() {
        return element(by.id('planets'));
    },
    get allPlanetsName() {
        return element.all(by.css('app-planet h6'));
    },
};
