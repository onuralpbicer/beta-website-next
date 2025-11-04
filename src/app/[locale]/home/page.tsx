export async function generateStaticParams() {
    return ['tr-TR' , 'en-US'].map((locale) => ({
        locale
    }))
}

export default function TestPage() {
  return (
    <div>
        <main>
            home page
        </main>
    </div>
  );
}
