const { createTransport } = require('nodemailer')

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'sashavillegas30@gmail.com',
        pass: 'u7Xsfe6ANghrXpht5e'
    }
});

module.exports = transporter