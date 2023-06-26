import './globals.css';
import { Inter } from 'next/font/google';

import Navigation from '../components/Navigation/Navigation';

import { navigationItems, socialMediaItems } from '../common/data/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Noël Willener',
  description: 'Developed by Noël Willener',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navigation
            navigationItems={navigationItems}
            socialMediaItems={socialMediaItems}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
