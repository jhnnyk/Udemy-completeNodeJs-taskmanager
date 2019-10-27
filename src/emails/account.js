const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: 'jhnnyk@gmail.com',
  from: 'jhnnyk@gmail.com',
  subject: 'This is my first creation!',
  text: 'I hope this one actually gets to you!'
});
