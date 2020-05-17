import { browser, element, by, Key } from 'protractor';

export class DashboardPage {
  navigateTo(): Promise<unknown> {
    return browser.get('/dashboard') as Promise<unknown>;
  }

  getHeaderText(){
    return element(by.id('dashboardTitle'));
}

getMessage(){
  return element(by.id('message'));
}

getLogoutButtonElement(){
  return element(by.id('logout'));
}

}