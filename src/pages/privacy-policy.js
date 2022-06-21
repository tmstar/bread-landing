import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import PrivacyPolicy from 'sections/privacy-policy';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <SEO title="Bread - The #1 App for Shopping List" />
      <PrivacyPolicy />
    </Layout>
  );
}
