import { HackernewsCommentFrontendPage } from './app.po';

describe('hackernews-comment-frontend App', () => {
  let page: HackernewsCommentFrontendPage;

  beforeEach(() => {
    page = new HackernewsCommentFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
