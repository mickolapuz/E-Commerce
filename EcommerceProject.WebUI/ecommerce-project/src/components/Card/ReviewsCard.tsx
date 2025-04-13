import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Rating } from "@mui/material";
import { ReviewsCardProps } from "../../models/ComponentProps/ReviewsCardProps";

const ReviewsCard: React.FC<ReviewsCardProps> = ({ name, date, review, rating }) => {
  return (
    <Card
      sx={{
        width: 350,
        height: 200,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: 3
      }}
    >
      <CardContent sx={{ flex: "0 0 auto" }}>
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="black" gutterBottom>
          {date}
        </Typography>
        <Rating
          value={rating}
          max={5}
          readOnly
          precision={1}
          sx={{
            color: "#FFD700",
            "& .MuiRating-iconEmpty": {
              color: "#C0C0C0"
            }
          }}
        />
      </CardContent>
      <Box
        sx={{
          flex: "1 1 auto",
          overflowY: "auto",
          padding: 2,
          backgroundColor: "#f9f9f9"
        }}
      >
        <Typography variant="body1">{review}</Typography>
      </Box>
    </Card>
  );
};

export default ReviewsCard;
