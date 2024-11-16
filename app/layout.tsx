import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";
import Header from "@/components/shared/Header";

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Пицца — заказать с доставкой на дом бесплатно, доставка еды из пиццерии Додо",
  description: "🍕Закажи пиццу с бесплатной доставкой в Ташкент за 30 минут. Купить недорогую еду в Ташкент рядом с домом или офисом в пиццерии Додо. Оформи заказ на сайте dodopizza.uz или по телефону 1168.",
  icons: {
    icon: '/small-logo.svg'
  },
  generator: 'Next.js',
  applicationName: 'Pizza',
  referrer: 'origin-when-cross-origin',
  keywords: ['Pizza', 'Fast food', 'Online Pizza', 'Order pizza'],
  authors: [{ name: 'Mirobidov', url: 'https://github.com/Accountmm' }],
  creator: 'Mirobidov Mirabbos',
  publisher: 'Mirobidov M M',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: 'noyaca',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={nunito.className}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
