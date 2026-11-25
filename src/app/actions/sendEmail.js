"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const honeypot = formData.get("_honey");

  if (honeypot) {
    return { success: true, message: "Message sent successfully." };
  }

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all fields." };
  }

  try {
    const data = await resend.emails.send({
      // Change this to contact@yourdomain.com once verified on Resend
      from: "Leonardo Piccardi Website <onboarding@resend.dev>", 
      to: "inama0987654321@gmail.com",
      reply_to: email,
      subject: `New Website Enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      
      // --- BEAUTIFUL CUSTOM HTML THEME ---
      html: `
        <div style="background-color: #f4f0e6; padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #111b17; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            
            <!-- Header Area -->
            <div style="padding: 40px 40px 20px 40px; text-align: center; border-bottom: 1px solid rgba(217, 199, 155, 0.2);">
              <h1 style="margin: 0; color: #d9c79b; font-family: Georgia, 'Times New Roman', serif; font-size: 28px; letter-spacing: -0.5px; font-weight: normal;">
                Leonardo Piccardi
              </h1>
              <p style="margin: 10px 0 0 0; color: #e7dbc0; font-size: 10px; letter-spacing: 2px; text-transform: uppercase;">
                New Website Enquiry
              </p>
            </div>

            <!-- Body Content -->
            <div style="padding: 30px 40px 40px 40px;">
              
              <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 5px 0; color: #d9c79b; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">From</p>
                <p style="margin: 0; color: #ffffff; font-size: 16px;">${name}</p>
              </div>

              <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 5px 0; color: #d9c79b; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">Email</p>
                <p style="margin: 0; color: #ffffff; font-size: 16px;">
                  <a href="mailto:${email}" style="color: #ffffff; text-decoration: underline;">${email}</a>
                </p>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(217, 199, 155, 0.2);">
                <p style="margin: 0 0 10px 0; color: #d9c79b; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">Message</p>
                <div style="color: #ffffff; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
              </div>

            </div>
            
            <!-- Footer -->
            <div style="background-color: #0b120f; padding: 15px; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 11px;">
                Sent securely from the Leonardo Piccardi contact form.
              </p>
            </div>
            
          </div>
        </div>
      `,
    });

    return { success: true, message: "Thank you! Your message has been sent." };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}