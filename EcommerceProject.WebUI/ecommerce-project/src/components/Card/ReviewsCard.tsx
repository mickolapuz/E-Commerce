import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Rating } from "@mui/material";
import { ReviewsCardProps } from "../../models/ComponentProps/ReviewsCardProps";
import { getReviewsCardStyles } from "./ReviewsCardStyles";

const ReviewsCard: React.FC<ReviewsCardProps> = ({ name, date, review, rating }) => {
  const styles = getReviewsCardStyles();

  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="black" gutterBottom>
          {date}
        </Typography>
        <Rating value={rating} max={5} readOnly precision={1} sx={styles.rating} />
      </CardContent>
      <Box sx={styles.box}>
        <Typography variant="body1">{review}</Typography>
      </Box>
    </Card>
  );
};

export default ReviewsCard;
