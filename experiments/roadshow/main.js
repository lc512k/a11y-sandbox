const path = require('path');
const TRANSPORT = process.env.TRANSPORT;
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(TRANSPORT);

module.exports = function (req, res) {
	console.log('thank you page')
	console.log(req.body)

	const options = {
		from: '"a11y survey" <no-reply@ft.com>',
		to: 'laura.carvajal@ft.com',
		subject: req.body.name,
		text: JSON.stringify(req.body)
	};

	transporter.sendMail(options, function (emailError, data) {
		if (emailError) {
			console.log('Error sending emails', emailError);
			return;
		}
		console.log('email sent!', data)
	});

	res.sendFile(path.join(__dirname + '/public/thankyou.html'));
}