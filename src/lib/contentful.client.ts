import { createClient, EntrySkeletonType } from 'contentful';
import {
  IAppHeaderEntry,
  IAppHeaderFields,
  IContentfulEntries,
  IFooterEntry,
  IFooterFields,
  IHomePageEntry,
  IHomePageFields,
  SupportedLocales,
} from '@beta/lib/contentful';

const contentDeliveryToken = process.env['CONTENTFUL_DELIVERY_TOKEN']!;
const contentPreviewToken = process.env['CONTENTFUL_PREVIEW_TOKEN']!;

export const contentfulClient = createClient({
  space: 'e3zlqbakza8u',
  accessToken: contentPreviewToken,
  host: 'preview.contentful.com',
}).withoutUnresolvableLinks;

export async function loadHomePage(
  locale: SupportedLocales,
): Promise<IHomePageEntry> {
  const home = await contentfulClient.getEntry<
    EntrySkeletonType<IHomePageFields>
  >(IContentfulEntries.Home, {
    locale,
  });

  return home;
}

export async function loadHeaderInformation(
  locale: SupportedLocales,
): Promise<IAppHeaderEntry> {
  return contentfulClient.getEntry<EntrySkeletonType<IAppHeaderFields>>(
    IContentfulEntries.AppHeader,
    {
      locale,
    },
  );
}

export async function loadFooter(
  locale: SupportedLocales,
): Promise<IFooterEntry> {
  const footer = await contentfulClient.getEntry<
    EntrySkeletonType<IFooterFields>
  >(IContentfulEntries.Footer, {
    locale,
  });
  console.log(footer);

  return footer;
}
