import {loadHomePage} from '@beta/lib/contentful.client'
import {SupportedLocales} from "@beta/lib/contentful";

export async function generateStaticParams() {
    return [SupportedLocales.Turkish, SupportedLocales.English].map((locale) => ({
        locale
    }))
}

export default async function TestPage({params}: { params: Promise<{ locale: SupportedLocales }> }) {
    const {locale} = await params
    const page = await loadHomePage(locale)
    return (
        <div>
            <main>
                home page {JSON.stringify(page)}
            </main>
        </div>
    );
}
