import React from 'react';
import { SupportedLocales } from '@beta/lib/contentful';
import { loadHeaderInformation } from '@beta/lib/contentful.client';
import Header from '@beta/lib/components/header/header';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = (await params) as { locale: SupportedLocales };

  const headerInfo = await loadHeaderInformation(locale);
  return (
    <React.Fragment>
      <Header headerInfo={headerInfo} locale={locale} />
      {children}
      <div>footer</div>
    </React.Fragment>
  );
}
