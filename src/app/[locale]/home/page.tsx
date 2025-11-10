import { loadHomePage } from '@beta/lib/contentful.client';
import { SupportedLocales } from '@beta/lib/contentful';
import './home.scss';
import React from 'react';
import { WhyUs } from '@beta/lib/components/why-us/why-us';
import { Featured } from '@beta/lib/components/featured/featured';

export async function generateStaticParams() {
  return [SupportedLocales.Turkish, SupportedLocales.English].map((locale) => ({
    locale,
  }));
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocales }>;
}) {
  const { locale } = await params;
  const home = await loadHomePage(locale);
  return (
    <React.Fragment>
      <section className="hero">
        <img src={home.heroImage} alt="hero_image" />

        <h1>{home.heroTitle}</h1>
        <p>{home.heroDescription}</p>

        <button>{home.linkText}</button>
      </section>
      <section>
        <h2>{home.featuredTitle}</h2>
        <div className="why-us-container">
          {home.featured.map((featured) => (
            <Featured key={featured.name} featured={featured} />
          ))}
        </div>
      </section>
      <section>
        <h2>{home.whyUsTitle}</h2>
        <div className="why-us-container">
          {home.whyUs.map((whyUs) => (
            <WhyUs key={whyUs.title} whyUs={whyUs} />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
