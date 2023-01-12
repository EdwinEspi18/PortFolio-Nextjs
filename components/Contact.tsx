import { FC } from "react";
import Image from "next/image";

import { Col, Container, Row, Spacer, Text } from "@nextui-org/react";

export const Contact: FC = () => {
  return (
    <>
      <Spacer y={4} />
      <Container xl css={{ position: "relative" }} justify='space-between'>
        <Image
          src='/contact.svg'
          alt='Circles'
          style={{ position: "absolute", left: 0, zIndex: 1 }}
          loading='lazy'
          width={300}
          height={300}
        />
        <Text h3 css={{ zIndex: "$max" }}>
          Quieres Contactarme?
        </Text>
      </Container>
    </>
  );
};
