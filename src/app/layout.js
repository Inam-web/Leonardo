import "./globals.css";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { author } from "@/data/author";

const siteDescription =
  "The official author website of Leonardo Piccardi, featuring Puck and Liara 1: The Two Little Aliens and the Magic Stone.";
const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${author.name} — Author`,
    template: `%s | ${author.name}`,
  },
  description: siteDescription,
  applicationName: author.name,
  authors: [{ name: author.name }],
  openGraph: {
    title: `${author.name} — Author`,
    description: siteDescription,
    type: "website",
    siteName: author.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${author.name} — Author`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
