import Link from "next/link";

export default function ContactInvitation() {
  return (
    <section className="contact-invitation" aria-labelledby="contact-invitation-title">
      <div className="page-container contact-invitation__inner">
        <div>
          <p className="eyebrow"><span>THE READER’S DESK</span></p>
          <h2 id="contact-invitation-title">For readers, publishers<br />and fellow <em>travellers.</em></h2>
          <p className="contact-invitation__note">
            Leonardo’s direct contact details have not yet been provided. The contact page is ready for them when available.
          </p>
        </div>
        <Link className="contact-invitation__link" href="/contact">
          Visit the contact page <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
