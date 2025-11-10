import React from 'react';
import { IFooterInfo } from '@beta/lib/contentful';
import css from './footer.module.scss';

export async function Footer({ footer }: { footer: IFooterInfo }) {
  const now = new Date();

  return (
    <div className={css.footer}>
      <div className={css.columns}>
        {footer.footerColumns.map((column) => (
          <div key={column.title}>
            <h4>{column.title}</h4>

            {column.links.map((link, index) => (
              <React.Fragment key={index}>
                <span>{link.title}</span>
                <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <div className={css.copyright}>
        {footer.copyright} &#169; {now.getFullYear()}
      </div>
    </div>
  );
}
