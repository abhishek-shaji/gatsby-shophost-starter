import React from 'react';
import Shophost from '@abhishek-shaji/shophost-react-sdk';
import './src/assets/styles/global.css';

const wrapPageElement = ({ element, props }) => {
  const { language } = props.pageContext;
  return (
    <Shophost.Provider merchantId={process.env.GATSBY_SHOPHOST_MERCHANT_ID} locale={language}>
      {element}
    </Shophost.Provider>
  );
};

export { wrapPageElement };
