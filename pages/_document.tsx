import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../next-i18next.config';

import React from 'react';

type Props = DocumentProps & {
  // add custom document props
};

export default function Document(props: Props) {
  const currentLocale =
    props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  const analyticsTrackingId = 'G-WQ986DBSZ';

  const gaScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${analyticsTrackingId}');
  `;

  return (
    <Html lang={currentLocale}>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Chatbot UI"></meta>

        {analyticsTrackingId && (
          <React.Fragment>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${analyticsTrackingId}`}
            />
            <script dangerouslySetInnerHTML={{ __html: gaScript }} />
          </React.Fragment>
        )}
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
