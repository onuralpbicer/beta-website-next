import React from 'react';
import { IFooter } from '@beta/lib/contentful';
import css from './footer.module.scss';

export async function Footer({ footer }: { footer: IFooter }) {
  const now = new Date();

  return (
    <div className={css.footer}>
      <div className={css.columns}>
        {footer.footerColumns.map((column) => {
          console.log(
            column?.fields.title,
            JSON.stringify(column?.fields.links),
          );
          return (
            <div key={column?.fields.title}>
              <h4>{column?.fields.title}</h4>

              {column?.fields.links.map((link, index) => {
                return (
                  <React.Fragment key={link?.sys.id}>
                    <span>{link?.fields.title}</span>
                    <br />
                  </React.Fragment>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className={css.copyright}>
        {footer.copyright} &#169; {now.getFullYear()}
      </div>
    </div>
  );
}
