import { DashboardPage } from './Dashboard.po';
import { browser } from 'protractor';

describe('Dashboard view', function() {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
  });

  it('title should be Dashboard',()=>{
    page.navigateTo();
    expect(page.getHeaderText().getText()).toEqual('Dashboard');
  })

  it('content should be display',()=>{
    page.navigateTo();
    expect(page.getMessage().getText()).toEqual('Welcome to Dashboard');
  })

  it('call logout and redirect login',()=>{
    page.navigateTo();
    page.getLogoutButtonElement().click().then(function() {
      browser.waitForAngular();
      expect(browser.driver.getCurrentUrl()).toMatch('/login');
    });
  })
  
});