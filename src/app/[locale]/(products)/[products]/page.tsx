export async function generateStaticParams() {
    return [
        {
            locale: 'en-US',
            products: 'products',
        },
        {
            locale: 'tr-TR',
            products: 'hakkimizda',
        }
    ]
}

export default function TestPage() {
    return (
        <div>
            <main>
                about us page
            </main>
        </div>
    );
}
