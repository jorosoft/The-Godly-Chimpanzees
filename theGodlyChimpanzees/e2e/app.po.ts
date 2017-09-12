import { browser, by, element } from 'protractor';

export class TheGodlyChimpanzeesPage {
  navigateTo(route) {
    browser.waitForAngularEnabled(false);
    return browser.get(route);
  }

  getElementText(selector) {
    return element(by.css(selector)).getText();
  }

  setInputValue(selector, value) {
    element(by.css(selector)).sendKeys(value);
  }

  clickButton(selector) {
    return element(by.css(selector)).click();
  }

  waitForElementTextToChange (selector, textToWaitFor) {
    return browser.wait(function () {
        return element(by.css(selector)).getText().then(function (text) {
                return text === textToWaitFor;
            },
            function () {
                return element(by.css(selector)).getText().then(function (text) {
                    return text === textToWaitFor;
                });
            }
        );
    });
}
}
