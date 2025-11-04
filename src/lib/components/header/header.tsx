import {IHeaderInfo, SupportedLocales} from "@beta/lib/contentful";
import Link from "next/link";

export default async function Header({headerInfo, locale}: {headerInfo: IHeaderInfo, locale: SupportedLocales}) {

    const toLocale = locale === SupportedLocales.English ? SupportedLocales.Turkish : SupportedLocales.English;

    return <header>
        <img className="logo" src={headerInfo.logo} alt="logo"/>

        <nav aria-label="Header tabs">
            {headerInfo.headerLinks.map((link) =>
                <Link href={'../' + link.url} key={link.title}>
                    {link.title}
                </Link>
            )}
        </nav>

        <div className="spacer" aria-hidden="true"></div>

        <Link href={'/' + toLocale + '/home'}>
            {toLocale}
        </Link>

        {/* todo mobile menu */}
    </header>
}