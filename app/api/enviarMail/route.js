import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    const {nombre, apellido, email, asunto, mensaje} = await request.json();

    const estilosParrafos = `style="font-size: 1rem;
                                    font-weigth: 400;"`

    try {
        const transporter = nodemailer.createTransport({
            service: 'smtp',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'mailervetpaz@gmail.com',
                pass: process.env.SMTP_PUBLIC_PASSWORD
            }
        });
    
        const mailOption = {
            from: "diyorio@gmail.com",
            to: "colilo40@gmail.com",
            subject: `${asunto}`,
            html: `<h3>De:</h3><p ${estilosParrafos}>${nombre + " " + apellido}</p>
                    <h3>Email:</h3><p ${estilosParrafos}>${email}</p>
                    <h3>Mensaje:</h3><p ${estilosParrafos}>${mensaje}</p>`
        }

        console.log(mailOption);
        console.log(process.env.GOOGLE_MAPS_API_KEY);
    
        await transporter.sendMail(mailOption);
    
        return NextResponse.json({message: "Email enviado de forma correcta", status: 200});
    } catch(error) {
        return NextResponse.json({message: "Email enviado de forma correcta", status: 500});
    }
}