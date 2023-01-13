import { FC } from "react";

import { Container, Text } from "@nextui-org/react";

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
      <Container lg css={{ bgColor: "$red400" }}>
        <Text>Soy Residente Santiago, Gurabo</Text>
      </Container>
    </Container>
  );
};
