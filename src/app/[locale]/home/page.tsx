import { loadHomePage } from '@beta/lib/contentful.client';
import { SupportedLocales } from '@beta/lib/contentful';
import './home.scss';

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
    <section className="hero">
      <img src={home.heroImage} alt="hero_image" />

      <h1>{home.heroTitle}</h1>
      <p>{home.heroDescription}</p>

      <button>{home.linkText}</button>
    </section>
  );
}
