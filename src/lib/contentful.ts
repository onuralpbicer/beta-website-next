import { Entry, EntryFieldTypes, EntrySkeletonType, FieldsType, } from 'contentful';

export enum IContentfulEntries {
  AppHeader = '6HdXki6dz7Z4s0hojQ358c',
  AboutUs = '7EuN8NpkqQ3qen1o4GS3WK',
  ContactUs = '4PIESIC36bloQRBVPVO8ES',
  Home = '2DWaQQjSCRZGsFYUAONUqa',
  Footer = '1pzdwAfzyJw5uF9yp2lwop',
}

export enum IContentfulEnvs {
  staging = 'staging',
  master = 'master',
}

export type IContentfulEntry<
  T extends FieldsType,
  ID extends string = string,
> = Entry<EntrySkeletonType<T, ID>, 'WITHOUT_UNRESOLVABLE_LINKS', string>;
type ExtractType<T extends FieldsType> = IContentfulEntry<T>['fields'];

export interface IProductFields {
  name: EntryFieldTypes.Text;
}

export type IProductEntry = IContentfulEntry<IProductFields>;
export type IProduct = ExtractType<IProductFields>;

export interface IProductSubCategoryFields {
  name: EntryFieldTypes.Text;
  products: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType<IProductFields>>
  >;
}

export type IProductSubCategoryEntry =
  IContentfulEntry<IProductSubCategoryFields>;
export type IProductSubCategory = ExtractType<IProductSubCategoryFields>;

export interface IProductCategoryFields {
  name: EntryFieldTypes.Text;
  subCategoryOrProducts: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      EntrySkeletonType<IProductFields | IProductSubCategoryFields>
    >
  >;
}

export type IProductCategoryEntry = IContentfulEntry<IProductCategoryFields>;
export type IProductCategory = ExtractType<IProductCategoryFields>;

export interface IPageFields {
  title: EntryFieldTypes.Text;
  url: EntryFieldTypes.Text;
}

export type IPageLink = ExtractType<IPageFields>;

export interface IProductPageFields extends IPageFields {
  products: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType<IProductCategoryFields>>
  >;
}

export type IProductPageEntry = IContentfulEntry<IProductPageFields>;
export type IProductPage = ExtractType<IProductPageFields>;

export interface IRichTextPageFields extends IPageFields {
  content: EntryFieldTypes.RichText;
}

export type IRichTextPageEntry = IContentfulEntry<IRichTextPageFields>;
export type IRichTextPage = ExtractType<IRichTextPageFields>;

export interface IAppHeaderFields {
  title: EntryFieldTypes.Text;
  headerLinks: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType<IPageFields>>
  >;
  logo: EntryFieldTypes.AssetLink;
}

export type IAppHeaderEntry = IContentfulEntry<IAppHeaderFields>;
export type IAppHeader = ExtractType<IAppHeaderFields>;

export interface IFooterColumnFields {
  title: EntryFieldTypes.Text;
  links: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType<IPageFields>>
  >;
}

export type IFooterColumnEntry = IContentfulEntry<IFooterColumnFields>;
export type IFooterColumn = ExtractType<IFooterColumnFields>;

export interface IFooterFields {
  title: EntryFieldTypes.Text;
  copyright: EntryFieldTypes.Text;
  footerColumns: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType<IFooterColumnFields>>
  >;
}

export type IFooterEntry = IContentfulEntry<IFooterFields>;
export type IFooter = ExtractType<IFooterFields>;

export interface IWhyUsFields {
  title: EntryFieldTypes.Text;
  icon?: EntryFieldTypes.AssetLink;
  iconName?: EntryFieldTypes.Text;
}
export type IWhyUsEntry = IContentfulEntry<IWhyUsFields>;
export type IWhyUs = ExtractType<IWhyUsFields>;

export interface IHomePageFields {
  title: EntryFieldTypes.Text;
  heroTitle: EntryFieldTypes.Text;
  heroDescription: EntryFieldTypes.Text;
  heroImage: EntryFieldTypes.AssetLink;
  linkText: EntryFieldTypes.Text;
  linkTo: EntryFieldTypes.EntryLink<EntrySkeletonType<IPageFields>>;
  featured: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      EntrySkeletonType<
        IProductCategoryFields | IProductSubCategoryFields | IProductFields
      >
    >
  >;
  featuredTitle: EntryFieldTypes.Text;
  whyUs: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType<IWhyUsFields>>
  >;
  whyUsTitle: EntryFieldTypes.Text;
}
export type IHomePageEntry = IContentfulEntry<IHomePageFields>;
export type IHomePage = ExtractType<IHomePageFields>;

export enum SupportedLocales {
  English = 'en-US',
  Turkish = 'tr-TR',
}

export interface IHeaderInfo extends Omit<IAppHeader, 'logo' | 'headerLinks'> {
  logo: string;
  headerLinks: IPageLink[];
}

export interface IHomePageInfo extends Omit<IHomePage, 'heroImage' | 'whyUs'> {
  heroImage: string;
  whyUs: IWhyUs[];
}

export interface IFooterColumnInfo extends Omit<IFooterColumn, 'links'> {
  links: IPageLink[];
}

export interface IFooterInfo extends Omit<IFooter, 'footerColumns'> {
  footerColumns: IFooterColumnInfo[];
}
