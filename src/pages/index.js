import React from 'react';

import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';
import 'react-modal-video/css/modal-video.min.css';
import 'typeface-bree-serif';
import 'typeface-dm-sans';

import { StickyProvider } from 'contexts/app/app.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Features from 'sections/features';
import FaqOne from 'sections/faq-one';
import Pricing from 'sections/pricing';
import ProductFeature from 'sections/product-feature';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <SEO
          title="Bread - The #1 App for Shopping List"
          description="Share your shopping list with your family on Bread. ✓Easy to share. ✓Family can check the list immediately. ✓You can tick off the list on the go. Make your list Now!"
        />
        <Banner />
        <Features />
        <FaqOne />
        <ProductFeature />
        <Pricing />
      </Layout>
    </StickyProvider>
  );
}
