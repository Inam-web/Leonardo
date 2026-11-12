import { getPrimaryBookHref } from "@/data/books";

export default function BookActions({ book, compact = false }) {
  const campaignIsPrimary = Boolean(book.campaignUrl);
  const href = getPrimaryBookHref(book);

  if (!href) {
    return <p className="book-action-pending">Purchase information will be added when available.</p>;
  }

  return (
    <a
      className={`button-link${compact ? " button-link--compact" : ""}`}
      href={href}
      target={campaignIsPrimary ? undefined : "_blank"}
      rel={campaignIsPrimary ? undefined : "noreferrer noopener"}
      aria-label={
        campaignIsPrimary
          ? `Discover ${book.title}`
          : `View ${book.title} on Amazon (opens in a new tab)`
      }
    >
      <span>{campaignIsPrimary ? "Discover the book" : "Find it on Amazon"}</span>
      <span className="button-link__arrow" aria-hidden="true">↗</span>
    </a>
  );
}
