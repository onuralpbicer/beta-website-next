import React from 'react';
import { SupportedLocales } from '@beta/lib/contentful';
import { loadFooter, loadHeaderInformation } from '@beta/lib/contentful.client';
import Header from '@beta/lib/components/header/header';
import { Footer } from '@beta/lib/components/footer/footer';
import './layout.scss';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = (await params) as { locale: SupportedLocales };

  const headerInfo = await loadHeaderInformation(locale).then(
    (header) => header.fields,
  );
  const footer = await loadFooter(locale).then((footer) => footer.fields);
  return (
    <div className="main-container">
      <Header headerInfo={headerInfo} locale={locale} />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
}
