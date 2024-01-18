const PAGE_URL = process.env.NODE_ENV === 'production'
  ? 'http://dashboard.fitmind-academy.com'
  : 'http://localhost:3003';

const MONGO_URI = process.env.NODE_ENV === 'production'
  ? process.env.MONGO_URI_TEST
  : process.env.MONGO_URI_TEST;


module.exports = { PAGE_URL, MONGO_URI };
