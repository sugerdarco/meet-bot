import {BasePage} from './BasePage.js';
import cron from 'cron';

async function main() {
    const page = new BasePage();

    let url = "your_input_url"
    await page.visit(url);

    url = await page.findMeetLink();
    await page.visit(url);

    await page.findAskToJoinButton();
    await page.quitAfter();
}

//run every day on 9:00 AM
const job = new cron.CronJob('00 09 * * *', () => {
    console.log('Running task to click "Ask to join" button at 9:00 AM');
    main().catch((err) => console.log(err));
});

job.start();

