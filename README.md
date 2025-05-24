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
1. Clone this repository
2. Add the script.js file to your website
3. Configure the Telegram bot (see Configuration section)

## Configuration
Edit the `config` object in script.js:
- `botToken`: Your Telegram bot token from @BotFather
- `chatId`: Your Telegram chat ID (can be obtained from @userinfobot)

## Usage
1. The script automatically tracks visitors on page load
2. For form submissions, call `submitForm()` when your form is submitted

## Dependencies
- Uses ipify.org for IP detection
- Uses ipapi.co for geolocation
- Requires Telegram bot token

## Contribution
Feel free to fork and modify this project. Pull requests are welcome!