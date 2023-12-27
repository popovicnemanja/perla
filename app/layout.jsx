import Header from "../components/Header";
import { Roboto } from "next/font/google";
import styles from "./globals.css";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});

export const metadata = {
  title: "Perla | Ortopedska pomagala",
  description:
    "Perla - Vaš partner u vrhunskim ortopedskim pomagalima. Otkrijte širok asortiman proizvoda, prilagođena rešenja i personalizovanu podršku za poboljšanje kvaliteta života. Kvalitet, stručnost i pažnja prema svakom klijentu čine nas liderom u industriji ortopedskih pomagala.",
  keywords:
    "Perla, ortopedska pomagala, ortopedski proizvodi, ulošci, steznici, ortoze, štake, invalidska kolica, medicinska oprema, podrška mobilnosti, personalizovana rešenja, kvalitetna ortopedska rešenja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
