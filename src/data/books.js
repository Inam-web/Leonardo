export const books = [
  {
    slug: "puck-and-liara-1",
    series: "Puck and Liara",
    number: 1,
    title: "Puck and Liara 1",
    subtitle: "The Two Little Aliens and the Magic Stone",
    italianTitle: "Puck e Liara, i due piccoli alieni e la pietra magica",
    author: "Leonardo Piccardi",
    coverImage: "/images/puck-and-liara-1.jpg",
    coverAssetPath: "public/images/puck-and-liara-1.jpg",
    coverWidth: 313,
    coverHeight: 501,
    readingAge: "7–12",
    purchaseUrl: "https://www.amazon.com/dp/B0GX3B5W89",
    // Set a dedicated campaign URL here when a future sales landing page is ready.
    campaignUrl: null,
    shortDescription: {
      en: "A summer holiday, a glowing stone, two small visitors from another world—and a journey that carries three ordinary humans across the galaxy.",
      it: "Una vacanza estiva, una pietra luminosa, due piccoli visitatori da un altro mondo e un viaggio che porta tre persone comuni attraverso la galassia.",
      es: "Unas vacaciones de verano, una piedra luminosa, dos pequeños visitantes de otro mundo y un viaje que lleva a tres personas corrientes por la galaxia.",
      de: "Sommerferien, ein leuchtender Stein, zwei kleine Besucher aus einer anderen Welt – und eine Reise, die drei ganz gewöhnliche Menschen durch die Galaxis führt.",
    },
    synopsis: {
      en: [
        "Michi and Gaia are spending their summer holiday with their beloved Grandpa Felice, a kind, eccentric man with a passion for astronomy and a secret dream: proving that life exists beyond Earth. One night, their loyal dog Argo discovers a mysterious glowing stone hidden in the woods.",
        "The discovery brings two small, friendly aliens—Puck and Liara—to their door. The stone is a powerful magical artifact from a distant planet, where their queen has been kidnapped and their world is in danger. Soon Grandpa Felice, Michi, and Gaia are travelling through space aboard a spaceship.",
        "Meteor storms, invisible spacecraft, strange planets, and magical creatures await them. This adventure of friendship, courage, and kindness is for young readers who love fantasy, space, and unforgettable characters.",
      ],
      it: [
        "Michi e Gaia trascorrono le vacanze estive con l'amato nonno Felice, un uomo gentile ed eccentrico, appassionato di astronomia e con un sogno segreto: dimostrare che esiste vita oltre la Terra. Una notte il loro fedele cane Argo scopre nel bosco una misteriosa pietra luminosa.",
        "La scoperta porta alla loro porta due piccoli e amichevoli alieni, Puck e Liara. La pietra è un potente artefatto magico proveniente da un pianeta lontano, dove la regina è stata rapita e il mondo è in pericolo. In breve, nonno Felice, Michi e Gaia si ritrovano a viaggiare nello spazio a bordo di un'astronave.",
        "Li attendono tempeste di meteoriti, veicoli spaziali invisibili, pianeti sconosciuti e creature magiche. Un'avventura di amicizia, coraggio e gentilezza, per giovani lettori che amano la fantasia, lo spazio e i personaggi indimenticabili.",
      ],
      es: [
        "Michi y Gaia pasan las vacaciones de verano con su querido abuelo Felice, un hombre amable y excéntrico, apasionado de la astronomía y con un sueño secreto: demostrar que existe vida más allá de la Tierra. Una noche, su fiel perro Argo descubre en el bosque una misteriosa piedra luminosa.",
        "El hallazgo lleva hasta su puerta a dos pequeños y simpáticos alienígenas, Puck y Liara. La piedra es un poderoso artefacto mágico procedente de un planeta lejano, donde la reina ha sido secuestrada y el mundo corre peligro. Muy pronto, el abuelo Felice, Michi y Gaia viajan por el espacio a bordo de una nave.",
        "Les esperan lluvias de meteoritos, naves invisibles, planetas extraños y criaturas mágicas. Una aventura de amistad, valor y bondad para jóvenes lectores que aman la fantasía, el espacio y los personajes inolvidables.",
      ],
      de: [
        "Michi und Gaia verbringen die Sommerferien bei ihrem geliebten Großvater Felice – einem freundlichen, eigenwilligen Mann, der sich für Astronomie begeistert und heimlich davon träumt, Leben außerhalb der Erde nachzuweisen. Eines Nachts entdeckt ihr treuer Hund Argo im Wald einen geheimnisvoll leuchtenden Stein.",
        "Der Fund bringt zwei kleine, freundliche Aliens, Puck und Liara, zu ihnen. Der Stein ist ein mächtiges magisches Artefakt von einem fernen Planeten, dessen Königin entführt wurde und dessen Welt in Gefahr ist. Bald reisen Opa Felice, Michi und Gaia an Bord eines Raumschiffs durch den Weltraum.",
        "Meteoritenstürme, unsichtbare Raumschiffe, fremde Planeten und magische Wesen erwarten sie. Ein Abenteuer über Freundschaft, Mut und Güte für junge Leser, die Fantasy, den Weltraum und unvergessliche Figuren lieben.",
      ],
    },
  },
];

export function getBookBySlug(slug) {
  return books.find((book) => book.slug === slug) || null;
}

export function getBookCampaignDestination(book) {
  return book.campaignUrl || book.purchaseUrl;
}
