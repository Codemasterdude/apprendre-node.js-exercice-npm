const validator = require('validator');

const emails = [
  'ken@capcom.com',
  'ryucapcom.com',
  'mario@nintendo.com',
  'luigi@nintendocom',
  'zelda@nintendo.fr',
];

emails.map(function (email) {
  if (validator.isEmail(email)) {
    console.log(`${email} : OK`);
  } else {
    console.log(`${email} : NOK`);
  }
});
