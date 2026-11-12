import "../globals.css";

export const metadata = {
  title: "Leonardo Piccardi — Author",
  description: "Discover the books and literary worlds of author Leonardo Piccardi.",
  applicationName: "Leonardo Piccardi",
  robots: { index: true, follow: true },
};

export default function RootRouteLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
