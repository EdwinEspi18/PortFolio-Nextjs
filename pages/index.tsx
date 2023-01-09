import { NextPage } from "next";
import Head from "next/head";

import { Container, Grid, Image, Row, Spacer, Text } from "@nextui-org/react";

import { useMediaQuery } from "../hooks/useMediaQuery";

import { titles } from "../fonts/font";

import { CardsSkillsPage, Props } from "../components/cardsSkills";
import { NavBar } from "../components/NavBar";

const Home: NextPage = () => {
  const isXs = useMediaQuery(360);

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
  ];
  return (
    <>
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
            }}
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
          </Container>
        </Grid>
        <Grid xs={12} md={6} xl={6}>
          <Image width={isXs ? 300 : 900} src='/image-blur.svg' alt='logo' />
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

        <Container justify='center' alignItems='center' css={{ maxW: "60%" }}>
          <Grid.Container justify='center' gap={1}>
            {skills.map(({ title, images }) => (
              <CardsSkillsPage key={title} title={title} images={images} />
            ))}
          </Grid.Container>
        </Container>
      </Container>
      <Container id='sobre-mi' fluid css={{ bgColor: "#0075FF" }}>
        <Text
          h2
          className={titles.className}
          css={{ textAlign: "center", pt: "$10" }}
        >
          Sobre mi
        </Text>
        <Container md css={{ bgColor: "$red400" }}>
          <Text>Soy Residente Santiago, Gurabo</Text>
        </Container>
      </Container>
    </>
  );
};

export default Home;
