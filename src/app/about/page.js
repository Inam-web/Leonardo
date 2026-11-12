import AuthorNote from "@/components/author/AuthorNote";
import PageMasthead from "@/components/layout/PageMasthead";
import { author } from "@/data/author";

export const metadata = {
  title: "About the Author",
  description:
    "The official biography page for Leonardo Piccardi. Author biography and portrait details are reserved for content supplied by the author.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageMasthead
        eyebrow="The author"
        title={author.name}
        description="This page is ready for Leonardo Piccardi’s own biography. No personal history or credentials have been invented."
        marker="LP"
      />
      <AuthorNote full />
    </main>
  );
}
