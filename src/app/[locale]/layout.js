import "../globals.css";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { books } from "@/data/books";
import { getCopy, supportedLocales } from "@/data/locales";

export const metadata = {
  title: {
    default: "Leonardo Piccardi — Author",
    template: "%s | Leonardo Piccardi",
  },
  description: "Discover the books and literary worlds of author Leonardo Piccardi.",
  applicationName: "Leonardo Piccardi",
  openGraph: {
    siteName: "Leonardo Piccardi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale)) notFound();

  const copy = getCopy(locale);
  const featuredBook = books[0];

  return (
    <html lang={locale}>
      <body>
        <a className="skip-link" href="#main">{copy.skip}</a>
        <SiteHeader locale={locale} book={featuredBook} />
        <main id="main" tabIndex="-1">{children}</main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
