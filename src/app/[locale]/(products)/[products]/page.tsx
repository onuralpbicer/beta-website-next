export async function generateStaticParams() {
    return [
        {
            locale: 'en-US',
            products: 'products',
        },
        {
            locale: 'tr-TR',
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
