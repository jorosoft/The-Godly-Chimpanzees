import { TheGodlyChimpanzeesPage } from './app.po';

describe('the-godly-chimpanzees App', () => {
  let page: TheGodlyChimpanzeesPage;

  beforeEach(() => {
    page = new TheGodlyChimpanzeesPage();
  });

  it('should display app title', () => {
    page.navigateTo('/');

    expect(page.getElementText('app-root .mat-title')).toContain('TheZoo');
  });

  it('should login with correct credentials', () => {
    page.navigateTo('/users/login');
    page.setInputValue('input[ng-reflect-name="email"]', 'pesho@alibaba.com');
    page.setInputValue('input[ng-reflect-name="password"]', '123456');

    page.clickButton('md-card-actions button[type=submit]')
    .then(() => {
      page.waitForElementTextToChange('.mat-toolbar-layout a:first-of-type', 'Log Out');

      expect(page.getElementText('a[ng-reflect-router-link="/users/profile"]')).toBeTruthy();

      page.navigateTo('/users/logout');
      page.waitForElementTextToChange('.mat-toolbar-layout a:first-of-type', 'Log In');
    });
  });

  it('should not login with correct credentials', () => {
    page.navigateTo('/users/login');
    page.setInputValue('input[ng-reflect-name="email"]', 'pesho@alibaba.com');
    page.setInputValue('input[ng-reflect-name="password"]', '000000');

    page.clickButton('md-card-actions button[type=submit]')
    .then(() => {
      setTimeout(() => {
        expect(page.getElementText('a[ng-reflect-router-link="/users/profile"]')).toBeUndefined();
      }, 3000);
    });
  });

 });
