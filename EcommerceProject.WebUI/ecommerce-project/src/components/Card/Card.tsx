import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { COLOR_PALETTE } from "../../styles/constant";
import { CardProps } from "../../models/ComponentProps/CardProps";

const CustomCard: React.FC<CardProps> = ({ id, name, description, image, price }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "2px solid #8B5E3C",
        borderRadius: "8px",
        margin: "16px"
      }}
    >
      <CardMedia key={id} component="img" height="250" image={image} alt={name} />
      <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Typography variant="h4" component="div" color={COLOR_PALETTE.darkEspresso.main} mb={1}>
          {name}
        </Typography>
        <Typography variant="body2" color={COLOR_PALETTE.mediumBrown.main} sx={{ flexGrow: 1, minHeight: 50 }}>
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
