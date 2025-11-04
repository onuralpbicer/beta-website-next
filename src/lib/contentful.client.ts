import {createClient, EntrySkeletonType} from "contentful";
import {IContentfulEntries, IHomePageFields, IHomePageInfo, IWhyUsFields, SupportedLocales} from "@beta/lib/contentful";

const contentDeliveryToken = process.env['CONTENTFUL_DELIVERY_TOKEN']!;
const contentPreviewToken = process.env['CONTENTFUL_PREVIEW_TOKEN']!;

export const contentfulClient = createClient({
    space: 'e3zlqbakza8u',
    accessToken: contentPreviewToken,
    host: 'preview.contentful.com',
}).withoutLinkResolution

export async function loadHomePage(locale: SupportedLocales): Promise<IHomePageInfo> {
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