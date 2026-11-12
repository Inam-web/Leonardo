"use client";

import { usePathname } from "next/navigation";
import { localeOptions } from "@/data/locales";

export default function LanguageSwitcher({ locale, label }) {
  const pathname = usePathname() || `/${locale}`;
  const currentPath = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");

  return (
    <details className="language-menu">
      <summary aria-label={label}>
        <span>{locale.toUpperCase()}</span>
        <span className="language-menu__chevron" aria-hidden="true">⌄</span>
      </summary>
      <div className="language-menu__panel">
        {localeOptions.map((item) => (
          <a
            href={`/${item.code}${currentPath}`}
            aria-current={item.code === locale ? "page" : undefined}
            key={item.code}
          >
            <span>{item.label}</span>
            <span className="language-menu__code">{item.code.toUpperCase()}</span>
          </a>
        ))}
      </div>
    </details>
  );
}
