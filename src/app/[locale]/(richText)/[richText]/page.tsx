import { SupportedLocales } from '@beta/lib/contentful';
import { loadRichTextPage, loadRichTextPages, } from '@beta/lib/contentful.client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function generateStaticParams() {
  const pages = await Promise.all(
    Object.values(SupportedLocales).map(async (locale) => {
      const entries = await loadRichTextPages(locale);

      return {
        locale,
        entries,
      };
    }),
  );

  return pages.flatMap(({ locale, entries }) =>
    entries.map((entry) => ({
      locale,
      richText: entry.fields.url,
    })),
  );
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocales; richText: string }>;
}) {
  const { locale, richText } = await params;

  const richTextEntry = await loadRichTextPage(locale, richText);
  console.log(richTextEntry);

  return (
    <section>
      <h1>{richTextEntry.fields.title}</h1>

      <div>{documentToReactComponents(richTextEntry.fields.content)}</div>
    </section>
  );
}
