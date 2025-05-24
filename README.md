# Website Visitor Tracker with Telegram Notifications

This project tracks website visitors and sends notifications to Telegram when someone visits your website or submits a form.

## Features
- Visitor IP tracking
- Geolocation detection (city and country)
- Telegram notifications for:
  - New website visitors
  - Form submissions (domain purchase inquiries)
- Toast notifications for user feedback

## Setup
1. Clone this repository: `git clone https://github.com/your-repo/stitch.git`
2. Install dependencies: `npm install` (if applicable)
3. Copy `.env.example` to `.env` and configure your environment variables
4. Add the script.js file to your website's HTML:
```html
<script src="script.js"></script>
```

## Configuration
1. Create a Telegram bot using @BotFather and get your bot token
2. Get your chat ID using @userinfobot
3. Edit the `config` object in script.js:
- `botToken`: Your Telegram bot token (or set TELEGRAM_BOT_TOKEN in .env)
- `chatId`: Your Telegram chat ID (or set TELEGRAM_CHAT_ID in .env)

## Environment Variables
Configure these in your .env file:
- `TELEGRAM_BOT_TOKEN`: Your Telegram bot token
- `TELEGRAM_CHAT_ID`: Your Telegram chat ID
- `IP_API_KEY`: Optional API key for ipapi.co (for higher rate limits)

## Usage
1. The script automatically tracks visitors on page load
2. For form submissions, call `submitForm()` when your form is submitted
3. View visitor logs in your Telegram chat

## Dependencies
- Uses ipify.org for IP detection
- Uses ipapi.co for geolocation
- Requires Telegram bot token

## Contribution
Feel free to fork and modify this project. Pull requests are welcome!

## License
MIT