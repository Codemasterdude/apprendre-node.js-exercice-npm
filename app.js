const validator = require('validator');

const emails = [
  'captain@americafuckyeah.com',
  'fantasticfour.com',
  'ironman@stark-tower.com',
  'avengers@mansionfr',
  'bruce-wayne@batcave.com',
];

emails.map((email) => {
  if (validator.isEmail(email)) {
    console.log(`${email} : OK`);
  } else {
    console.log(`${email} : NOK`);
  }
});
