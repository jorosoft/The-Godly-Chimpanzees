import { TheGodlyChimpanzeesPage } from './app.po';

describe('the-godly-chimpanzees App', () => {
  let page: TheGodlyChimpanzeesPage;

  beforeEach(() => {
    page = new TheGodlyChimpanzeesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
