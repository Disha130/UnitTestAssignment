import { LoginPage } from './login.po';
import { browser } from 'protractor';

describe('Login view', function() {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });
  it('should show test in email input',()=>{
    page.navigateTo();
    page.setEmailInputElement('test');
    expect(page.getEmailInputElement()).toEqual('test');
  })

  it('should show  error for invalid email',()=>{
    page.navigateTo();
    page.setEmailInputElement('test');
    expect(page.getEmailValidateError().getText()).toEqual('Email must be a valid email address');
  })

  it('should show test in password input',()=>{
    page.navigateTo();
    page.setPasswordInputElement('test');
    expect(page.getPasswordInputElement()).toEqual('test');
  })

  it('should show  error for invalid password',()=>{
    page.navigateTo();
    page.setPasswordInputElement('test');
    expect(page.getPasswordValidateError().getText()).toEqual('Password must be at least 6 characters');
  })

  it('should show login button',()=>{
      page.navigateTo();
      expect(page.getLoginButtonElement()).toBeTruthy();
  })

  it('should redirect dashboard',()=>{
    page.navigateTo();
    page.setEmailInputElement('admin@gmail.com');
    page.setPasswordInputElement('admin@123');
    page.getLoginButtonElement().click().then(function() {
      browser.waitForAngular();
      expect(browser.driver.getCurrentUrl()).toMatch('/dashboard');
    });
  })
});






  



