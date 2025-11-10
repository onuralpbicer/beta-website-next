import { IWhyUs } from '@beta/lib/contentful';
import { Icon } from '@beta/lib/components/Icon';
import css from './why-us.module.scss';

export async function WhyUs({ whyUs }: { whyUs: IWhyUs }) {
  return (
    <div className={css.container}>
      <div className={css.iconContainer}>
        {whyUs.iconName ? <Icon>{whyUs.iconName!}</Icon> : <span>todo</span>}
      </div>
      <span
        dangerouslySetInnerHTML={{
          __html: whyUs.title,
        }}
      />
    </div>
  );
}
