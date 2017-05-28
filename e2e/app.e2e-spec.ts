import { NgrxFirebasePage } from './app.po';

describe('ngrx-firebase App', () => {
  let page: NgrxFirebasePage;

  beforeEach(() => {
    page = new NgrxFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
