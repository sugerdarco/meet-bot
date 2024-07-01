# meet-bot

A bot to automatically join Google Meet meetings.

## Getting Started

Follow these steps to set up and run the bot:

1. **Update the URL**: Replace `your_input_url` with the appropriate URL in the `index.js` file.
2. **Set User Profile Path**: In `BasePage.js`, change `your_username` to your PC username in the `userProfilePath` variable.
3. **Install Dependencies**: Run `npm install` to install the required packages.
4. **Run the Bot**: Execute `node index.js` or `npm run test` to start the bot.

## Note

- The browser instance will quit automatically after 2 hours. To modify this, change the time in the `quitAfterAn2Hour` function from `7200000` (milliseconds) to your desired time in milliseconds in the `BasePage.js` file.

- The process runs by default at 9:00 AM. You can change the time when the process runs through the `cronJob` in the `index.js` file.
