import { IFeaturedInfo } from '@beta/lib/contentful';
import css from './featured.module.scss';

export async function Featured({ featured }: { featured: IFeaturedInfo }) {
  return (
    <div className={css.container}>
      <img
        src={featured.image}
        alt={`image for featured item ${featured.name}`}
      />

      <div className={css.name}>{featured.name}</div>
    </div>
  );
}
