import { FC } from "react";

import { Card, Grid, Image, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

import { useMediaQuery } from "../hooks/useMediaQuery";

export interface Props {
  title: string;
  images: string;
}

export const CardsSkillsPage: FC<Props> = ({ title, images }) => {
  const isXs = useMediaQuery(360);
  return (
    <Grid justify='center' alignItems='center' xs={6} md={4} xl={4}>
      <Card
        css={{ maxW: "200px", bgColor: "$white" }}
        variant={"shadow"}
        borderWeight={"light"}
      >
        <Card.Body css={{ display: "flex", alignItems: "center" }}>
          <Tooltip shadow content={title}>
            <motion.div initial={{ scale: 1 }} whileHover={{ rotate: 360, scale: 1.1 }} transition={ { duration: 0.5, ease:'easeInOut' }} >
            <Image width={isXs ? 35 : 70} src={images} alt='programming' />
            </motion.div>
          </Tooltip>
        </Card.Body>
      </Card>
    </Grid>
  );
};
