import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const nodemailerForgotPass = async (jwt, userName, email) => {
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
                    <p>If you need change the password, click here:</p>
                    <br />
                    <br />
                    <a href='http://localhost:5173/confirmtoken?token=${jwt}&email=${email}'>Restart password</a>
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

export const nodemailerConfirmUser = async (jwt, userName, email) =>{
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
    
        const body = `
        <body>
            <div>
                <h3 className='text-3xl text-lime-500'>Hello ${userName}! ¿How are you?</h3>
                <br />
                <br />
                <p>If Confirm user, click here:</p>
                <br />
                <br />
                <a href='http://localhost:5173/confirm-user?token=${jwt}&email=${email}'>Confirm user</a>
            </div>
        </body>
        `
        const mail = await transport.sendMail(
            {
                from: process.env.MY_MAIL,
                to:"72aeaeb2ce-935582+1@inbox.mailtrap.io", //Prop email para enviar al email del usuario.
                subject: "Confirm user",
                html: body ,
                attachments:[],
            }
        )
    } catch (error) {
        console.log(error);
    }
    }