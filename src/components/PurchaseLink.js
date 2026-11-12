import Link from "next/link";
import { getBookCampaignDestination } from "@/data/books";

function Arrow() {
  return <span className="button-arrow" aria-hidden="true">↗</span>;
}

export function PurchaseLink({ book, label, className = "button button--dark", useCampaign = false }) {
  const href = useCampaign ? getBookCampaignDestination(book) : book.purchaseUrl;
  const external = /^https?:\/\//i.test(href);
  const content = <><span>{label}</span><Arrow /></>;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} — ${book.title}`}>
        {content}
      </a>
    );
  }

  return (
    <Link className={className} href={href} aria-label={`${label} — ${book.title}`}>
      {content}
    </Link>
  );
}

export function TextLink({ href, children, className = "text-link" }) {
  return (
    <Link className={className} href={href}>
      <span>{children}</span>
      <span className="text-link__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
