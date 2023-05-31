import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req) {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.APP_PASS,
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: {
                name: `${body.name} ${body.email}`,
                address: body.email
            },
            to: process.env.RECEIVER,
            subject: `${body.name} sent you a message from Portfolio`,
            text: body.message,
        })

        return NextResponse.json({ success: true });


    } catch (error) {

        return NextResponse.json({ success: false, error });
        
    }

}
