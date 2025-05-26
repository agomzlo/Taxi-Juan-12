import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.PRIVATE_RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
    try{
        const data = await request.json();
        const { name, phone, email, message } = data;

        await resend.emails.send({
            from: 'taxi12velezmalaga.es <onboarding@resend.dev>',
            to: import.meta.env.PRIVATE_RESEND_EMAIL_TO,
            subject: 'Nuevo mensaje de un cliente',
            html: `<p><strong>Nombre y Apellidos:</strong> ${name}</p>
                  <p><strong>Teléfono:</strong> ${phone}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Mensaje:</strong></p>
                  <p>${message}</p>`,
        })
        return new Response(null, {status: 200})
    }catch{
        return new Response(null, {status: 500})
    }
}