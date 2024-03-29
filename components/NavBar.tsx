import { FC } from "react";

import { Button, Navbar, Link, Text } from "@nextui-org/react";

import { titles } from "../fonts/font";

export const NavBar: FC = () => {
  return (
    <>
      <div id='nav'></div>
      <Navbar variant='sticky' maxWidth={"fluid"}>
        <Navbar.Toggle showIn='xs' />
        <Navbar.Content hideIn={"xs"}></Navbar.Content>
        <Navbar.Brand>
          <Link href='/#nav'>
            <Text
              h1
              size={30}
              css={{ margin: "0" }}
              className={titles.className}
            >
              PortFolio
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content hideIn='xs' variant='underline-rounded'>
          <Navbar.Link href='/#nav'>
            <Text className={titles.className}>Inicio</Text>
          </Navbar.Link>
          <Navbar.Link href='/#skills'>
            <Text className={titles.className}>Skills</Text>
          </Navbar.Link>
          <Navbar.Link href='/#sobre-mi'>
            <Text className={titles.className}>Sobre Mi</Text>
          </Navbar.Link>
          <Navbar.Link href='#'>
            <Text className={titles.className}>Proyectos</Text>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content hideIn='xs'>
          <Navbar.Link href='/tarea.pdf' target={"_blank"}>
            <Button shadow rounded color='gradient' bordered>
              Descargar CV
            </Button>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content hideIn={"xs"}></Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link href='/#nav'>Inicio</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href='/#skills'>Skills</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href='/#sobre-mi'>Sobre Mi</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link>Projectos</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href='/tarea.pdf' target={"_blank"}>
              Descargar CV
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
