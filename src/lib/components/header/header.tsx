import { IHeaderInfo, SupportedLocales } from '@beta/lib/contentful';
import Link from 'next/link';
import './header.scss';

export default async function Header({
  headerInfo,
  locale,
}: {
  headerInfo: IHeaderInfo;
  locale: SupportedLocales;
}) {
  const toLocale =
    locale === SupportedLocales.English
      ? SupportedLocales.Turkish
      : SupportedLocales.English;

  const toLocaleName =
    toLocale === SupportedLocales.English ? 'English' : 'Türkçe';

  return (
    <header>
      <Link href={'/' + locale + '/home'}>
        <img className="logo" src={headerInfo.logo} alt="logo" />
      </Link>

      <nav aria-label="Header tabs">
        {headerInfo.headerLinks.map((link) => (
          <Link href={'../' + link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </nav>

      <div className="spacer" aria-hidden="true"></div>

      <Link href={'/' + toLocale + '/home'}>{toLocaleName}</Link>

      {/* todo mobile menu */}
    </header>
  );
}
