import React from 'react';
import { Container, Box, Grid, Heading, Text, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import feature1 from 'assets/service-1.svg';
import feature2 from 'assets/service-2.svg';
import feature3 from 'assets/service-3.svg';
import feature4 from 'assets/service-4.svg';
import feature5 from 'assets/service-5.svg';
import feature6 from 'assets/service-6.svg';

const PRODUCT_FEATURE = {
  sectionTitle: {
    text: 'Product features',
    title: 'アプリの特徴',
  },
  posts: [
    {
      icon: feature4,
      title: '目的ごとのリスト',
      text: 'お店や商品の種類、イベントごとに無制限にリストを作成できます。',
      // button: {
      //   link: "#",
      //   label: "Buy Now",
      // },
    },
    {
      label: 'Most Popular',
      icon: feature2,
      title: '閲覧・編集モード',
      text: '閲覧モードなら買い物中の誤操作を防げます。家族はいつでも買いたいものを追加できます。',
    },
    {
      icon: feature5,
      title: '色・タグによる分類',
      text: '色やタグで分類することで、リストを見やすくします。',
    },
    {
      icon: feature1,
      title: 'メールアドレスによる共有',
      text: 'メールアドレスさえ知っていれば家族や仲間とリストを共有できます。',
    },
    {
      icon: feature6,
      title: 'クラウド',
      text: 'データはすべてクラウドにあるので、どのモバイル・パソコンからも同じものが見れます。',
    },
    {
      label: 'Secure',
      icon: feature3,
      title: 'セキュリティ',
      text: 'データは最新鋭のクラウドサービスによって守られています。',
    },
  ],
};

const ProductFeature = () => {
  const { sectionTitle, posts } = PRODUCT_FEATURE;
  return (
    <Box sx={styles.section}>
      <Container>
        <SectionHeading slogan={sectionTitle.text} title={sectionTitle.title} />

        <Grid sx={styles.grid}>
          {posts.map(({ label, icon, title, text, button }, index) => (
            <Box key={`feature-key-${index}`} sx={styles.items}>
              <Box className="image">
                <Image src={icon} alt={title} width="70" height="70" />
              </Box>
              <Box sx={styles.itemContent}>
                <Heading as="h3">
                  {title}
                  {label ? <Text as="span">{label}</Text> : null}
                </Heading>
                <Text as="p">{text}</Text>
                {/* <Link href={button.link}>
                  {button.label}
                  <IoIosArrowForward />
                </Link> */}
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductFeature;

const styles = {
  section: {
    pt: ['70px', null, null, null, '100px', null, '150px'],
    pb: ['40px', null, null, null, '70px', null, '90px'],
    backgroundColor: '#F9FAFC',
  },
  grid: {
    gridColumnGap: '30px',
    gridTemplateColumns: ['1fr', null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
  items: {
    display: 'flex',
    mb: ['30px', null, null, null, null, null, '60px'],
    '.image': {
      flexShrink: '0',
      width: '70px',
      height: '70px',
      mr: ['20px', null, null, '30px'],
    },
  },
  itemContent: {
    h3: {
      fontSize: ['17px', null, null, null, '18px'],
      color: '#0F2137',
      fontWeight: 700,
      lineHeight: 1,
      alignItems: 'center',
      display: 'inline-flex',
      flexWrap: 'wrap',
      span: {
        backgroundColor: '#28A5FF',
        fontSize: '13px',
        color: '#fff',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        lineHeight: '26px',
        borderRadius: '30px',
        letterSpacing: '-0.5px',
        px: '10px',
        ml: ['10', null, '10px', '10px'],
        mt: ['0', null, '5px', '0'],
      },
    },
    p: {
      color: '#343D48',
      fontSize: ['14px', null, null, '16px'],
      lineHeight: 1.87,
      mt: '5px',
      mb: '10px',
    },
    a: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '15px',
      color: '#3183FF',
      fontWeight: 500,
      svg: {
        fontSize: '17px',
        ml: '5px',
      },
    },
  },
};
