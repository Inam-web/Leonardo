"use client";

import { useState, useEffect } from "react";
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
  
  // Scroll animation state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If scrolling down and past 100px, hide the header
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        // If scrolling up, show the header
        setIsHidden(false);
      }
      
      // Adds a glass background effect when scrolled
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: copy.nav.home, href: `${root}#home` },
    { label: copy.nav.books, href: `${root}/books` },
    { label: copy.nav.about, href: `${root}/about` },
    { label: copy.nav.contact, href: `${root}/contact` },
  ];

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""} ${isHidden ? "is-hidden" : ""}`}>
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

        <div className="mobile-header-actions">
          <LanguageSwitcher locale={locale} label={copy.nav.chooseLanguage} />
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
              </div>
            </div>
          </details>
        </div>

      </div>
    </header>
  );
}