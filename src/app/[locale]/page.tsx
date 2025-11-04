import {redirect} from "next/navigation";
import {SupportedLocales} from "@beta/lib/contentful";

export async function generateStaticParams() {
    return [SupportedLocales.Turkish, SupportedLocales.English].map((locale) => ({
        locale
    }))
}

export default async function Home({params}: { params: Promise<{ locale: SupportedLocales }> }) {
    const {locale} = await params
    redirect(`${locale}/home`)
}
