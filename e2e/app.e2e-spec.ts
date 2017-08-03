import { AngInterceptorPage } from './app.po';

describe('ang-interceptor App', () => {
  let page: AngInterceptorPage;

  beforeEach(() => {
    page = new AngInterceptorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
