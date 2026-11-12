import Link from "next/link";
import { author } from "@/data/author";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner page-container">
        <div className="site-footer__identity">
          <Link className="site-brand site-brand--footer" href="/">
            <span className="site-brand__mark" aria-hidden="true">LP</span>
            <span className="site-brand__name">{author.name}</span>
          </Link>
          <p>Stories that travel beyond the familiar.</p>
        </div>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          <Link href="/books">Books</Link>
          <Link href="/about">About the author</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p className="site-footer__copyright">© {new Date().getFullYear()} {author.name}</p>
      </div>
    </footer>
  );
}
