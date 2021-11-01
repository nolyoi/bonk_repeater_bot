require('dotenv').config();

module.exports = {
  TELEGRAM_TOKEN: process.env.TKEY,
  MIN_SECONDS_BETWEEN_SENDS: 20, // Minimum seconds between send in the same group
  SECONDS_CYCLE: 5, // Seconds in each test cycle
}