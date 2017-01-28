import { AuthGuardAppPage } from './app.po';

describe('auth-guard-app App', function() {
  let page: AuthGuardAppPage;

  beforeEach(() => {
    page = new AuthGuardAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
