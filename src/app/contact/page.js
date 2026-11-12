import Link from "next/link";
import PageMasthead from "@/components/layout/PageMasthead";
import { author } from "@/data/author";

export const metadata = {
  title: "Contact",
  description:
    "Contact information for readers, publishers, media representatives, and collaborators will be published here when supplied by Leonardo Piccardi.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageMasthead
        eyebrow="Correspondence"
        title="A note begins here."
        description="For reader messages, publishing enquiries, media requests, and conversations around the books."
        marker="03 / CONTACT"
      />
      <section className="contact-page-content" aria-labelledby="contact-page-title">
        <div className="page-container contact-page-content__inner">
          <div className="contact-page-content__copy">
            <p className="eyebrow"><span>THE READER’S DESK</span></p>
            <h2 id="contact-page-title">A space for<br /><em>the conversation.</em></h2>
            <p>
              {author.email
                ? <>For reader notes and professional enquiries, write to <a className="contact-email" href={`mailto:${author.email}`}>{author.email}</a>.</>
                : `A public email address or social profile has not yet been provided by ${author.name}. We have left this space ready rather than inventing a way to reach him.`}
            </p>
            <p className="contact-page-content__note">
              {author.email
                ? "For book availability and purchasing, visit the book’s Amazon listing."
                : "Once contact details are supplied, they can be added here in src/data/author.js."}
            </p>
          </div>
          <aside className="contact-card" aria-label="Author contact details">
            <span className="contact-card__index">01 / DIRECT CONTACT</span>
            <span className="contact-card__icon" aria-hidden="true">✳</span>
            <h3>{author.email ? "Write to Leonardo" : "Contact details pending"}</h3>
            <p>{author.email || "Email address to be supplied by the author"}</p>
            {!author.email && <span className="contact-card__asset">No public email or social account has been supplied.</span>}
          </aside>
        </div>
      </section>
      <section className="contact-page-back" aria-label="Continue exploring">
        <div className="page-container contact-page-back__inner">
          <p>Until then, there are worlds to discover.</p>
          <Link className="text-link" href="/books">Explore the books <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
