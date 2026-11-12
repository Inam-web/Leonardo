import AuthorHero from "@/components/hero/AuthorHero";
import AuthorNote from "@/components/author/AuthorNote";
import ContactInvitation from "@/components/contact/ContactInvitation";
import FeaturedBookSection from "@/components/books/FeaturedBookSection";
import StorySignals from "@/components/sections/StorySignals";
import { featuredBook } from "@/data/books";

export const metadata = {
  title: "Stories Beyond the Stars",
  description:
    "Meet Leonardo Piccardi and discover Puck and Liara 1: a magical adventure about friendship, courage, and a journey across the galaxy.",
};

export default function HomePage() {
  return (
    <main id="main-content">
      <AuthorHero book={featuredBook} />
      <FeaturedBookSection book={featuredBook} />
      <StorySignals beats={featuredBook.storyBeats} />
      <AuthorNote />
      <ContactInvitation />
    </main>
  );
}
