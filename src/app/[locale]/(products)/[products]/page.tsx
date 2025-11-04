import {SupportedLocales} from "@beta/lib/contentful";

export async function generateStaticParams() {
    return [
        {
            locale: SupportedLocales.English,
            products: 'products',
        },
        {
            locale: SupportedLocales.Turkish,
            products: 'urunler',
        }
    ]
}

export default function TestPage() {
    return (
        <div>
            <main>
                products page
            </main>
        </div>
    );
}
