import BookListItem from "@/components/books/BookListItem";
import PageMasthead from "@/components/layout/PageMasthead";
import { books } from "@/data/books";

export const metadata = {
  title: "Books",
  description:
    "Explore the books of Leonardo Piccardi, beginning with Puck and Liara 1: The Two Little Aliens and the Magic Stone.",
};

export default function BooksPage() {
  return (
    <main id="main-content">
      <PageMasthead
        eyebrow="The collection"
        title="Books & other worlds."
        description="A growing shelf of stories by Leonardo Piccardi. Begin with the first journey beyond the stars."
        marker={`${String(books.length).padStart(2, "0")} ${books.length === 1 ? "TITLE" : "TITLES"}`}
      />
      <section className="book-catalogue" aria-label="Book catalogue">
        <div className="page-container">
          <div className="book-catalogue__intro">
            <p className="eyebrow"><span>THE SHELF</span><span className="eyebrow__divider">/</span> {books.length} {books.length === 1 ? "publication" : "publications"}</p>
            <p>Each title has its own page, synopsis, edition details, and destination for readers.</p>
          </div>
          <div className="book-catalogue__list">
            {books.map((book, index) => <BookListItem book={book} index={index} key={book.slug} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
