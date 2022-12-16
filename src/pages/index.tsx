import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { useMerchant } from '@abhishek-shaji/shophost-react-sdk';
import { graphql } from 'gatsby';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

const IndexPage: React.FC<PageProps> = () => {
  const { languages, changeLanguage, t, language } = useI18next();

  return (
    <header className="main-header">
      <ul className="absolute top-2 right-2 border-2">
        {languages.map((lng) => (
          <li key={lng} className="p-2 border-b bg-black text-white">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage(lng);
              }}>
              {lng}
            </a>
          </li>
        ))}
      </ul>

      <main className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-9xl text-gray-800 mb-4">
            Page 1 - {language.toUpperCase()}
          </h1>
          <h2 className="text-xl text-gray-700 mb-6">You are on page 2, enjoy!</h2>
          <p className="text-gray-500 mb-8">{t('heading')}</p>
          <Link
            className="px-6 py-3 font-semibold bg-gray-400 rounded-lg text-gray-800 hover:bg-gray-500"
            to="/page2">
            Go to Page 2
          </Link>
        </div>
      </main>

      <Link to="/page2" className="text-2xl font-bold underline">
        Go to page 2
      </Link>
    </header>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => {
  const { t } = useTranslation();
  return <title>{t('heading')}</title>;
};
