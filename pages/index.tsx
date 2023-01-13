import { Fragment } from "react";
import { NextPage } from "next";
import Head from "next/head";

import { Container, Grid, Image, Row, Spacer, Text } from "@nextui-org/react";
import { motion } from "framer-motion";

import { useMediaQuery } from "../hooks/useMediaQuery";

import { titles } from "../fonts/font";

import {
  Contact,
  SobreMi,
  CardsSkillsPage,
  Props,
  NavBar,
} from "../components";

const Home: NextPage = () => {
  const isXs = useMediaQuery(360);
  const isSm = useMediaQuery(650);
  const isLg = useMediaQuery(1920);

  const skills: Props[] = [
    { title: "Next.js", images: "/next.svg" },
    {
      title: "React.js",
      images: "/react.svg",
    },
    {
      title: "TypeScript",
      images: "/typescript.svg",
    },
    {
      title: "JavaScript",
      images: "/javascript.svg",
    },
    {
      title: "GitHub",
      images: "/github.svg",
    },
    {
      title: "Material UI",
      images: "/mui.svg",
    },
    {
      title: "Git",
      images: "/git.svg",
    },
    {
      title: "Node.js",
      images: "/node.svg",
    },
    {
      title: "Next UI",
      images: "/next-ui.svg",
    },
    {
      title: "MongoDB",
      images: "/mongo.svg",
    },
  ];
  return (
    <Fragment>
      <Head>
        <title>Home - PortFolio</title>
        <meta
          name='description'
          content='PortFolio creado por Edwin, para mostrar mis proyectos y experiencias'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Grid.Container
        id='inicio'
        wrap='wrap'
        css={{ minHeight: "100vh" }}
        gap={1}
      >
        <Grid alignItems='center' justify='center' xs={12} md={6} xl={6}>
          <Container
            css={{
              mt: "-150px",
              maxWidth: "440px",
              lineHeight: "20px",
              "@xsMax": {
                mt: "$xs",
                lineHeight: "50px",
              },
              "@smMax": {
                mt: "$20",
              },
              "@mdMax": {
                mt: "$2xl",
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Row justify='center'>
                <Text h2 size={50} className={titles.className}>
                  Edwin Alexander
                </Text>
              </Row>
              <Row justify='flex-start'>
                <Text size={30} className={titles.className}>
                  Espinal Taveras
                </Text>
              </Row>
              <Row justify='flex-start'>
                <Text
                  size={25}
                  className={titles.className}
                  css={{ color: "#0075FF" }}
                >
                  Front-End Developer
                </Text>
              </Row>
            </motion.div>
          </Container>
        </Grid>
        <Grid xs={12} md={6} xl={6} css={{ overflow: "hidden" }}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              objectFit='contain'
              width={isXs ? 300 : isSm ? 400 : isLg ? 950 : 700}
              src='/image-blur.svg'
              alt='logo'
            />
          </motion.div>
        </Grid>
      </Grid.Container>
      <Container id='skills' fluid css={{ bgColor: "$white" }}>
        <Text
          h2
          css={{ textAlign: "center", pt: "$10" }}
          className={titles.className}
          color='black'
        >
          Skills
        </Text>

        <Container
          justify='center'
          alignItems='center'
          css={{ maxW: "38%", "@xsMax": { maxW: "85%" } }}
        >
          <Grid.Container justify='center' gap={1}>
            {skills.map(({ title, images }) => (
              <CardsSkillsPage key={title} title={title} images={images} />
            ))}
          </Grid.Container>
          <Spacer y={1.5} />
        </Container>
      </Container>
      <SobreMi />
      <Spacer y={1} />
      <Contact />
      {/* <Spacer y={1} /> */}
    </Fragment>
  );
};

export default Home;
