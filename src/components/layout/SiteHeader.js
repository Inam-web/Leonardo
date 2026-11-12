import Link from "next/link";
import { featuredBook, getPrimaryBookHref } from "@/data/books";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About the author" },
  { href: "/contact", label: "Contact" },
];

function PurchaseLink({ mobile = false }) {
  const campaignIsPrimary = Boolean(featuredBook.campaignUrl);

  return (
    <a
      className={mobile ? "mobile-nav__purchase" : "header-purchase"}
      href={getPrimaryBookHref(featuredBook)}
      target={campaignIsPrimary ? undefined : "_blank"}
      rel={campaignIsPrimary ? undefined : "noreferrer noopener"}
      aria-label={
        campaignIsPrimary
          ? `Discover ${featuredBook.title}`
          : `Find ${featuredBook.title} on Amazon (opens in a new tab)`
      }
    >
      <span>{mobile ? "Find the book" : "Find the book"}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner page-container">
        <Link className="site-brand" href="/" aria-label="Leonardo Piccardi — home">
          <span className="site-brand__mark" aria-hidden="true">LP</span>
          <span className="site-brand__name">Leonardo <span>Piccardi</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link className="desktop-nav__link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <PurchaseLink />
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <span>Menu</span>
            <span className="mobile-nav__glyph" aria-hidden="true"><i /><i /></span>
          </summary>
          <nav className="mobile-nav__panel" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <PurchaseLink mobile />
          </nav>
        </details>
      </div>
    </header>
  );
}
