import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const nodemailerConfig = async (jwt, userName, email) => {
    try {
        const transport = nodemailer.createTransport(
            {
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "d6b879f08a8edf",
                    pass: "2b62b43769294b",
                }
            }
        )
        const bodyMail = `
            <body>
                <div>
                    <h3 class='text-3xl text-lime-500'>Hello ${userName}! ¿How are you?</h3>
                    <br />
                    <br />
                    <p>If you need change your password, click here:</p>
                    <br />
                    <br />
                    <a href='http://localhost:5173/change-password?token=${jwt}&email=${email}'>Restart password</a>
                </div>
            </body>
        `
        const mail = await transport.sendMail(
            {
                from: process.env.MY_MAIL,
                to:"72aeaeb2ce-935582+1@inbox.mailtrap.io", //Prop email para enviar al email del usuario.
                subject: "Restart your password",
                html: bodyMail ,
                attachments:[],
            }
        )
        
    } catch (error) {
        console.log(error);
    }
};
