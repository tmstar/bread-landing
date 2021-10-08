import React from "react";
import { Box, Container, Flex, Image, Heading, Text } from "theme-ui";
import Accordion from "components/accordion/accordion";
import image from "assets/faq-one-1.png";
const FAQ_ONE_DATA = {
  sectionImage: image,
  tagline: "Website content builder",
  title: "いますぐ買い物リストを家族や仲間と共有しよう",
  text: "たくさんあるショッピングサイトの欲しいものリストや、頭の中の買いたいものリストを一か所で管理したいと思ったことはありませんか？Breadならそれができます！",
  faqs: [
    {
      isExpanded: true,
      title: "複数のお買い物リストを管理",
      contents: (
        <div>
          Breadでは、お店や商品の種類、イベントごとに無制限にリストを作成できます。
          ドラッグストア、BBQ、カレーなど、さまざまな目的でリストをつくって、必要なくなったら簡単に削除できます。
        </div>
      ),
    },
    {
      isExpanded: false,
      title: "タグづけ",
      contents: (
        <div>
          Breadは、リストにタグづけしたり、アイテムに色づけしたりすることで、わかりやすく分類できます。
          パートナーのメールアドレスをタグとして入力すれば、リストを共有できるので、買い物を依頼することもできます。
        </div>
      ),
    },
    {
      isExpanded: false,
      title: "お買い物リスト表示",
      contents: (
        <div>
          買い物中は閲覧モードにしておくことで、買い物中にリストを誤操作せずにつかえます。
          リスト作成時はアイテムにメモや色づけをして、見た目をきれいに整理できます。
        </div>
      ),
    },
  ],
};
const FaqOne = () => {
  const { sectionImage, title, text, tagline, faqs } = FAQ_ONE_DATA;
  return (
    <Box as="section" sx={styles.section}>
      <Box sx={styles.sectionImage}>
        <Image src={sectionImage} width="1011" height="830" alt="sectionImage" />
      </Box>
      <Container sx={styles.container}>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Box sx={styles.sectionTitle}>
              <Text as="span">{tagline}</Text>
              <Heading as="h2">{title}</Heading>
              <Text as="p">{text}</Text>
            </Box>
            <Accordion items={faqs} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FaqOne;

const styles = {
  section: {
    position: "relative",
  },
  container: {
    maxWidth: ["100%", null, null, null, null, "1170px", "1280px"],
    position: "relative",
  },
  sectionImage: {
    display: ["none", null, null, null, "block"],
    position: ["relative", null, null, null, "absolute"],
    top: 0,
    left: [0, null, null, null, "-55%", "-15%", "0%"],
    maxWidth: ["80%", null, null, "94%", null, "100%"],
    mx: ["auto", null, null, null, 0],
    "@media(min-width: 1240px)": {
      left: "-20%",
    },
    "@media(min-width: 1440px)": {
      left: "-17%",
    },
    "@media(min-width: 1650px)": {
      left: "-10%",
    },
    "@media(min-width: 1850px)": {
      left: "0%",
    },
  },
  flex: {
    display: "flex",
    gap: 0,
    justifyContent: ["flex-start", null, null, null, "flex-end"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 60%", "0 0 45%"],
    pl: ["0", null, null, null, "80px"],
    pt: ["60px", null, null, null, "80px"],
    pb: ["50px", null, null, "70px", null, null, "90px"],
  },
  sectionTitle: {
    mb: "30px",
    textAlign: ["left", null, "center", null, "left"],
    h2: {
      color: "#0F2137",
      fontWeight: 500,
      fontSize: ["22px", null, null, "28px", "32px", "36px", "40px"],
      lineHeight: 1.5,
      letterSpacing: "-1.5px",
      mt: "10px",
      maxWidth: ["100%", "300px", "400px", null, "100%"],
      mx: ["0", null, "auto", null, "0"],
    },
    span: {
      color: "secondary",
      fontSize: ["15px", "16px"],
      lineHeight: 1.87,
      display: "block",
    },
    p: {
      color: "#0F2137",
      fontSize: "16px",
      lineHeight: 2.19,
      maxWidth: ["100%", "340px", "400px", null, "100%"],
      mx: ["0", null, "auto", null, "0"],
      mt: ["15px", null, null, "25px"],
    },
  },
};
