import { FC } from "react";

import { Container, Spacer, Text } from "@nextui-org/react";

import { titles } from "../fonts/font";

export const SobreMi: FC = () => {
  return (
    <Container id='sobre-mi' fluid css={{ bgColor: "#0075FF" }}>
      <Text
        h2
        className={titles.className}
        css={{ textAlign: "center", pt: "$10" }}
      >
        Sobre mi
      </Text>
      <Container xs alignItems='center'>
        <Text
          className={titles.className}
          css={{ letterSpacing: "$wider" }}
          size={"$2xl"}
        >
          Soy un estudiante de la carrera de ING. en Sistemas de la Universidad
          UTESA. Durante mi carrera me he interesado y especializado en el
          desarrollo de aplicaciones web y (ocasionalmente diseño) con
          JavaScript para el frontend y Node.js para el backend. Aprendí a
          trabajar con distintas tecnologías como React, TypeScript, Next.js,
          Express, MongoDB, CSS , entre otras. He trabajado también (Poco) con
          Java, C# y Mysql .
        </Text>
      </Container>
      <Spacer y={2} />
    </Container>
  );
};
