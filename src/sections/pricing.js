/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import Slider from "react-slick";
import SectionHeading from "components/section-heading";
import PriceTable from "components/price-table";
import SlickArrow from "components/slick-arrow";

const data = [
  {
    id: 1,
    title: "Free Plan",
    subtitle: "個人用途や商用利用もOK。ずっと無料でつかえます。",
    price: 0.0,
    isRecommended: true,
    buttonText: "無料で開始",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "目的ごとにリストを分けて作成",
      },
      {
        id: 2,
        isAvailable: true,
        title: `自由にタグをつけてリストを分類`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `メールアドレスを使って他のユーザと共有`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `色やフォントの変更`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `ログインしていないユーザへリストを外部公開`,
      },
    ],
  },
  {
    id: 2,
    title: "Premium Plan (予定)",
    subtitle: "現在はお使いになれません。",
    price: 100,
    isRecommended: false,
    buttonText: "無料で開始",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "目的ごとにリストを分けて作成",
      },
      {
        id: 2,
        isAvailable: true,
        title: `自由にタグをつけてリストを分類`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `メールアドレスを使って他のユーザと共有`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `色やフォントの変更`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `ログインしていないユーザへリストを外部公開`,
      },
    ],
  },
];

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Pricing = () => {
  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading sx={styles.heading} slogan="Deal for your business" title="すべての機能を無料で提供します" />
        <Slider sx={styles.grid} {...settings}>
          {data?.map((price, index) => (
            <PriceTable price={price} key={index} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  section: {
    pt: [6],
    pb: [12, null, null, 15, 17],
  },
  container: {
    pl: 0,
    pr: 0,
  },
  heading: {
    mb: ["0px", null, null, "70px"],
    px: [6, null, null, 0],
    h3: {},
  },
  grid: {
    gap: [null, null, null, null, 6],
    display: [null, null, null, null, "grid"],
    gridTemplateColumns: [null, null, null, null, "repeat(2, 1fr)"],
    alignItems: [null, null, null, null, "flex-end"],
    ".slick-slide > div": {
      p: ["35px", "40px", null, "35px 23px 23px", 0],
    },
    ".slick-arrow": {
      bottom: -5,
    },
  },
};
