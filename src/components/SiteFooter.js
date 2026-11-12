import Link from "next/link";
import { localeOptions, getCopy } from "@/data/locales";
import { author } from "@/data/author";

export default function SiteFooter({ locale }) {
  const copy = getCopy(locale);
  const root = `/${locale}`;
  const year = new Date().getFullYear();
  const links = [
    { label: copy.nav.books, href: `${root}/books` },
    { label: copy.nav.about, href: `${root}/about` },
    { label: copy.nav.contact, href: `${root}/contact` },
  ];

  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="site-footer__main">
          <div className="site-footer__identity">
            <Link className="brand brand--footer" href={`${root}#home`}>
              <span className="brand__seal" aria-hidden="true">LP</span>
              <span className="brand__name">Leonardo Piccardi</span>
            </Link>
            <p>{copy.footer.tagline}</p>
            <a className="footer-email" href={`mailto:${author.contact.email}`}>{author.contact.email}</a>
          </div>
          <div className="site-footer__links">
            <p className="eyebrow">{copy.nav.main}</p>
            <nav aria-label={copy.nav.main}>
              {links.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            </nav>
          </div>
          <div className="site-footer__languages">
            <p className="eyebrow">{copy.nav.chooseLanguage}</p>
            <nav aria-label={copy.nav.chooseLanguage}>
              {localeOptions.map((item) => (
                <a href={`/${item.code}`} aria-current={item.code === locale ? "page" : undefined} key={item.code}>
                  {item.code.toUpperCase()}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {year} Leonardo Piccardi</span>
          <span>{copy.footer.rights}</span>
          <span>{copy.footer.note}</span>
        </div>
      </div>
    </footer>
  );
}
