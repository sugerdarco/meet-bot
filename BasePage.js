import {Builder, By, until} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

class BasePage {
    driver;
    constructor() {
        const userProfilePath = 'C:\\Users\\"your_username"\\AppData\\Local\\Google\\Chrome\\User Data';
        let options = new chrome.Options();
        options.addArguments(`user-data-dir=${userProfilePath}`);
        options.addArguments('start-maximized');

        this.driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    }

    async visit(url) {
        return this.driver.get(url);
    }

    async findMeetLink() {
        let meetLinkElement = await this.driver.findElement(By.css('a[href*="meet.google.com"]'));
        return await meetLinkElement.getAttribute('href');
    }

    async findAskToJoinButton() {
        await this.driver.wait(until.elementLocated(By.xpath('//button[.//span[contains(text(), "Ask to join")]]')));
        let askToJoinButton = await this.driver.findElement(By.xpath('//button[.//span[contains(text(), "Ask to join")]]'));

        await askToJoinButton.click();
    }

    async quitAfter() {
        await new Promise(resolve => setTimeout(resolve, 7200000));
        await this.driver.quit();
    }
}

export {BasePage};
