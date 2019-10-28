const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jhnnyk@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jhnnyk@gmail.com',
    subject: 'Sorry to see you go',
    text: `Hi ${name}. Sorry to see that you cancelled you account with us. Is there anything we could have done to keep your business?`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};
