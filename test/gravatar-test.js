var Gravatar = require('../index.js');

var email = 'roymap67@gmail.com';

console.log( 'Image URL', Gravatar(email).avatar() );
console.log( 'Secure Image URL', Gravatar(email).secure().avatar() );
console.log( 'Defaulted Image URL', Gravatar(email).default('mm').avatar() );
console.log( 'Profile URL', Gravatar(email).profile() );