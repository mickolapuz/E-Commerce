import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { COLOR_PALETTE } from "../../styles/constant";
import { CardProps } from "../../models/ComponentProps/CardProps";
import { getCardStyles } from "./CardStyles";

const CustomCard: React.FC<CardProps> = ({ id, name, description, image, price }) => {
  const styles = getCardStyles();

  return (
    <Card sx={styles.card}>
      <CardMedia key={id} component="img" height="250" image={image} alt={name} />
      <CardContent sx={styles.cardContent}>
        <Typography variant="h4" component="div" color={COLOR_PALETTE.darkEspresso.main} mb={1}>
          {name}
        </Typography>
        <Typography variant="body2" color={COLOR_PALETTE.mediumBrown.main} sx={styles.description}>
          {description}
        </Typography>
        <Box mt="auto" display="flex" justifyContent="flex-end">
          <Typography variant="subtitle1" color={COLOR_PALETTE.mediumBrown.main}>
            ₱{price.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
