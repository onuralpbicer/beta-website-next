import { IWhyUs } from '@beta/lib/contentful';
import { Icon } from '@beta/lib/components/Icon';
import './why-us.scss';

export async function WhyUs({ whyUs }: { whyUs: IWhyUs }) {
  return (
    <div className="container">
      <div className="icon-container">
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
