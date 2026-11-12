import Link from "next/link";
import { getCopy } from "@/data/locales";
import { getBookCampaignDestination } from "@/data/books";
import LanguageSwitcher from "@/components/LanguageSwitcher";

function HeaderPurchase({ book, copy, className }) {
  const href = getBookCampaignDestination(book);
  const external = /^https?:\/\//i.test(href);
  const label = book.campaignUrl ? copy.nav.campaign : copy.nav.buy;
  const content = <><span>{label}</span><span aria-hidden="true">↗</span></>;

  if (external) {
    return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  }
  return <Link className={className} href={href}>{content}</Link>;
}

export default function SiteHeader({ locale, book }) {
  const copy = getCopy(locale);
  const root = `/${locale}`;
  const navItems = [
    { label: copy.nav.home, href: `${root}#home` },
    { label: copy.nav.books, href: `${root}/books` },
    { label: copy.nav.about, href: `${root}/about` },
    { label: copy.nav.contact, href: `${root}/contact` },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <Link className="brand" href={`${root}#home`} aria-label="Leonardo Piccardi — home">
          <span className="brand__seal" aria-hidden="true">LP</span>
          <span className="brand__name">Leonardo Piccardi</span>
        </Link>

        <nav className="desktop-nav" aria-label={copy.nav.main}>
          {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher locale={locale} label={copy.nav.chooseLanguage} />
          <HeaderPurchase book={book} copy={copy} className="header-cta" />
        </div>

        <details className="mobile-menu">
          <summary aria-label={copy.nav.menu}>
            <span>{copy.nav.menu}</span>
            <span className="mobile-menu__icon" aria-hidden="true"><i /><i /></span>
          </summary>
          <div className="mobile-menu__panel">
            <nav aria-label={copy.nav.main}>
              {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
            </nav>
            <div className="mobile-menu__bottom">
              <HeaderPurchase book={book} copy={copy} className="header-cta header-cta--mobile" />
              <LanguageSwitcher locale={locale} label={copy.nav.chooseLanguage} />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
