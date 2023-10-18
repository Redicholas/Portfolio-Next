import Sidebar from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MenuButton from '@/components/MenuButton';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nicholas Peters Site',
  description: 'Portfolio website of Front End Developer Nicholas Peters.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Script src="https://kit.fontawesome.com/2d79386da4.js"></Script>
      <body className={`${inter.className} flex`}>
        <Sidebar />
        <Link href="/" className="md:hidden">
          <Image
            src="/logo.svg"
            alt="Logo"
            height={60}
            width={60}
            className="absolute top-4 left-4"
          />
        </Link>
        <MenuButton />
        <main className="w-full flex justify-center items-center p-6 md:ml-48 mt-32 md:mt-12">
          {children}
        </main>
      </body>
    </html>
  );
}
