"use client";

import { useActionState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function ContactForm({ emailLabel, nameLabel, messageLabel, submitLabel }) {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  return (
    <form action={formAction} className="contact-form">
      {/* Honeypot field: Hidden from humans, bots will fill it out */}
      <input 
        type="text" 
        name="_honey" 
        style={{ display: "none" }} 
        tabIndex="-1" 
        autoComplete="off" 
      />

      <div className="contact-form__group">
        <label htmlFor="name">{nameLabel || "Your Name"}</label>
        <input type="text" id="name" name="name" required disabled={isPending} />
      </div>

      <div className="contact-form__group">
        <label htmlFor="email">{emailLabel || "Your Email"}</label>
        <input type="email" id="email" name="email" required disabled={isPending} />
      </div>

      <div className="contact-form__group">
        <label htmlFor="message">{messageLabel || "Your Message"}</label>
        <textarea id="message" name="message" rows="4" required disabled={isPending} />
      </div>

      {/* Success or Error Message */}
      {state?.message && (
        <p className={`contact-form__status ${state.success ? "is-success" : "is-error"}`}>
          {state.message}
        </p>
      )}

      <button type="submit" className="button button--dark" disabled={isPending}>
        <span>{isPending ? "Sending..." : (submitLabel || "Send Message")}</span>
        <span className="button-arrow" aria-hidden="true">↗</span>
      </button>
    </form>
  );
}