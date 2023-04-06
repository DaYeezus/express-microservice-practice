import {createTransport, Transporter} from "nodemailer";

export const emailTransporter: Transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    },
    debug: process.env.NODE_ENV === 'production',
})