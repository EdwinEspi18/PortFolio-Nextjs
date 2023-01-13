import { FC } from "react";
import Image from "next/image";

import { Col, Container, Link, Row, Spacer, Text } from "@nextui-org/react";

import { titles } from "../fonts/font";

export const Contact: FC = () => {
  return (
    <>
      <Spacer y={3} />
      <Container xl justify='space-between'>
        <Row justify='space-around'>
          <Col span={2} offset={-0.5}>
            <Image
              src='/contact.svg'
              alt='Circles'
              loading='lazy'
              width={300}
              height={300}
            />
          </Col>
          <Col span={10}>
            <Text h3 className={titles.className} size={35}>
              ¿Quieres Contactarme?
              {/* <Image
                src='/message.svg'
                width={44}
                height={44}
                alt='Message icon'
              /> */}
            </Text>
            <Link block href='mailto:espinaledwin1919@gmail.com'>
              espinaledwin1919@gmail.com
            </Link>
          </Col>
        </Row>
        <Row
          justify='flex-end'
          css={{ position: "absolute", bottom: 100, right: 80 }}
        >
          <Link
            href='https://github.com/EdwinEspi18'
            target='_blank'
            css={{ pr: "$10" }}
          >
            <Image
              src='/github2.svg'
              alt='Link to github'
              width={34}
              height={34}
            />
          </Link>
          <Link
            css={{ pr: "$10" }}
            href='https://www.linkedin.com/in/edwin-alexander-espinal-taveras-4451a7198/'
            target='_blank'
          >
            <Image
              src='/linkedlin.svg'
              alt='Link to Linkedlin'
              width={34}
              height={34}
            />
          </Link>
          <Link href='https://wa.me/8094169264' target='_blank'>
            <Image
              src='/whatsapp.svg'
              alt='Link to WS'
              width={34}
              height={34}
            />
          </Link>
        </Row>
      </Container>
    </>
  );
};
