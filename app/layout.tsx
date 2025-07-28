import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const font = Plus_Jakarta_Sans({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Prettify Go Global",
  description: "A full-service digital innovation partner",
  icons: {
    icon: "/logoMain.svg", // 👈 your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
