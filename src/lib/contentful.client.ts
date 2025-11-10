import { createClient, EntrySkeletonType } from 'contentful';
import {
  IAppHeaderFields,
  IContentfulEntries,
  IFooterColumnFields,
  IFooterFields,
  IFooterInfo,
  IHeaderInfo,
  IHomePageFields,
  IHomePageInfo,
  IPageFields,
  IWhyUsFields,
  SupportedLocales,
} from '@beta/lib/contentful';

const contentDeliveryToken = process.env['CONTENTFUL_DELIVERY_TOKEN']!;
const contentPreviewToken = process.env['CONTENTFUL_PREVIEW_TOKEN']!;

export const contentfulClient = createClient({
  space: 'e3zlqbakza8u',
  accessToken: contentPreviewToken,
  host: 'preview.contentful.com',
}).withoutLinkResolution;

export async function loadHomePage(
  locale: SupportedLocales,
): Promise<IHomePageInfo> {
  const home = await contentfulClient.getEntry<
    EntrySkeletonType<IHomePageFields>
  >(IContentfulEntries.Home, {
    locale,
  });

  const heroImage = await contentfulClient.getAsset(
    home.fields.heroImage.sys.id,
    {
      locale,
    },
  );

  const whyUs = await Promise.all(
    home.fields.whyUs.map((entry) =>
      contentfulClient.getEntry<EntrySkeletonType<IWhyUsFields>>(entry.sys.id, {
        locale,
      }),
    ),
  );

  return {
    ...home.fields,
    heroImage: heroImage.fields.file!.url, // todo fix
    whyUs: whyUs.map((entry) => entry.fields),
  };
}

export async function loadHeaderInformation(
  locale: SupportedLocales,
): Promise<IHeaderInfo> {
  const header = await contentfulClient.getEntry<
    EntrySkeletonType<IAppHeaderFields>
  >(IContentfulEntries.AppHeader, {
    locale,
  });

  const [logoAsset, ...headerLinks] = await Promise.all([
    contentfulClient.getAsset(header.fields.logo.sys.id),
    ...header.fields.headerLinks.map((link) =>
      contentfulClient.getEntry<EntrySkeletonType<IPageFields>>(link.sys.id, {
        locale,
      }),
    ),
  ]);

  return {
    ...header.fields,
    logo: logoAsset.fields.file!.url, // todo fix
    headerLinks: headerLinks.map((link) => link.fields),
  };
}

export async function loadFooter(
  locale: SupportedLocales,
): Promise<IFooterInfo> {
  const footer = await contentfulClient.getEntry<
    EntrySkeletonType<IFooterFields>
  >(IContentfulEntries.Footer, {
    locale,
  });

  const footerColumns = await Promise.all(
    footer.fields.footerColumns.map(async (column) => {
      const footerCol = await contentfulClient.getEntry<
        EntrySkeletonType<IFooterColumnFields>
      >(column.sys.id, {
        locale,
      });

      const links = await Promise.all(
        footerCol.fields.links.map((link) =>
          contentfulClient.getEntry<EntrySkeletonType<IPageFields>>(
            link.sys.id,
            {
              locale,
            },
          ),
        ),
      );

      return {
        ...footerCol.fields,
        links: links.map((link) => link.fields),
      };
    }),
  );

  return {
    ...footer.fields,
    footerColumns,
  };
}
