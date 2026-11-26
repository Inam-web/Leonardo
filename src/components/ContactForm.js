"use client";

import { useActionState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function ContactForm({ emailLabel, nameLabel, messageLabel, submitLabel }) {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  return (
    <form action={formAction} className="contact-form">
      <input 
        type="text" 
        name="_honey" 
        style={{ display: "none" }} 
        tabIndex="-1" 
        autoComplete="off" 
      />

      <div className="contact-form__group">
        <label htmlFor="name">{nameLabel}</label>
        <input type="text" id="name" name="name" placeholder="Jane Doe" required disabled={isPending} />
      </div>

      <div className="contact-form__group">
        <label htmlFor="email">{emailLabel}</label>
        <input type="email" id="email" name="email" placeholder="jane@example.com" required disabled={isPending} />
      </div>

      <div className="contact-form__group">
        <label htmlFor="message">{messageLabel}</label>
        <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required disabled={isPending} />
      </div>

      {state?.message && (
        <p className={`contact-form__status ${state.success ? "is-success" : "is-error"}`}>
          {state.message}
        </p>
      )}

      <button type="submit" className="button button--dark contact-form__submit" disabled={isPending}>
        <span>{isPending ? "Sending..." : submitLabel}</span>
        <span className="button-arrow" aria-hidden="true">↗</span>
      </button>
    </form>
  );
}