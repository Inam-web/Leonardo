export const books = [
  {
    slug: "puck-and-liara-1",
    title: "Puck and Liara 1",
    subtitle: "The Two Little Aliens and the Magic Stone",
    featured: true,
    coverImage: null,
    coverAssetPath: "/images/puck-and-liara-1.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GX3B5W89",
    // A future campaign can be added here without changing the presentation components.
    campaignUrl: null,
    asin: "B0GX3B5W89",
    format: "Kindle edition",
    language: "English",
    genres: ["Fantasy", "Science fiction", "Adventure"],
    tagline: "A Magical Adventure Beyond the Stars!",
    hook: "One summer holiday. A strange glowing stone. A journey across the galaxy.",
    synopsisExcerpt:
      "Michi and Gaia are spending their vacation with their beloved Grandpa Felice when their loyal dog Argo discovers a mysterious glowing stone in the woods. It leads them to Puck and Liara—and an adventure far beyond the world they know.",
    synopsis: [
      "What if a simple summer holiday turned into a journey across the galaxy?",
      "Michi and Gaia are spending their vacation with their beloved Grandpa Felice, a kind, eccentric man with a passion for astronomy and a secret dream: proving that extraterrestrial life exists. One night, everything changes when their loyal dog Argo discovers a mysterious glowing stone hidden in the woods.",
      "That discovery leads to the impossible.",
      "Two small, friendly aliens—Puck and Liara—arrive at their door, revealing that the strange stone is no ordinary object, but a powerful magical artifact from a distant planet. Their world is in danger, their queen has been kidnapped, and only one thing can save them: the courage and kindness of three ordinary humans.",
      "Before they know it, Grandpa Felice, Michi, and Gaia find themselves aboard a spaceship, traveling through the wonders and dangers of the galaxy. From meteor storms and invisible spacecraft to strange planets and magical creatures, their journey will test their bravery, their hearts, and their belief in doing what is right.",
      "Can they help defeat a powerful tyrant and restore peace to an alien world?",
      "Or will their adventure become a mission too great for even the bravest hearts?",
      "Puck and Liara: The Two Little Aliens and the Magic Stone is a heartwarming and exciting story about friendship, courage, and the power of kindness, perfect for young readers who love space adventures, fantasy, and unforgettable characters.",
    ],
    storyBeats: [
      {
        number: "01",
        title: "A light in the woods",
        description:
          "Argo discovers a mysterious glowing stone during a summer holiday.",
      },
      {
        number: "02",
        title: "Visitors from another world",
        description:
          "Puck and Liara arrive with a magical artifact—and a world in danger.",
      },
      {
        number: "03",
        title: "A voyage into the unknown",
        description:
          "Three ordinary humans join an intergalactic journey shaped by courage and kindness.",
      },
    ],
  },
];

export const featuredBook = books.find((book) => book.featured) || books[0];

export function getPrimaryBookHref(book) {
  return book.campaignUrl || book.amazonUrl;
}
