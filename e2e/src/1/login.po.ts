import { browser, element, by, Key } from 'protractor';

export class LoginPage {
  navigateTo(): Promise<unknown> {
    return browser.get('/login') as Promise<unknown>;
  }

  setEmailInputElement(text){
    return element(by.id('emailInput')).sendKeys(text);
  }

  getEmailInputElement(){
    return element(by.id('emailInput')).getAttribute('value');
  }

  getEmailValidateError(){
    return element(by.id('emailValidateError'));
  }

  setPasswordInputElement(password){
    return element(by.id('passwordInput')).sendKeys(password);
  }

  getPasswordInputElement(){
    return element(by.id('passwordInput')).getAttribute('value');
  }

  getPasswordValidateError(){
    return element(by.id('passwordValidateError'));
  }

  getLoginButtonElement(){
    return element(by.id('logn'));
  }

 

 
}

