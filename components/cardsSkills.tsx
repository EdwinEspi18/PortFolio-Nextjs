import { FC } from "react";

import { Card, Grid, Image, Tooltip } from "@nextui-org/react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export interface Props {
  title: string;
  images: string;
}

export const CardsSkillsPage: FC<Props> = ({ title, images }) => {
  const isXs = useMediaQuery(360);
  return (
    <Grid justify='center' alignItems='center' xs={12} md={4} xl={4}>
      <Card
        css={{ maxW: "200px", bgColor: "$white" }}
        variant={"shadow"}
        borderWeight={"light"}
      >
        <Card.Body css={{ display: "flex", alignItems: "center" }}>
          <Tooltip shadow content={title}>
            <Image width={isXs ? 75 : 150} src={images} alt='programming' />
          </Tooltip>
        </Card.Body>
      </Card>
    </Grid>
  );
};
