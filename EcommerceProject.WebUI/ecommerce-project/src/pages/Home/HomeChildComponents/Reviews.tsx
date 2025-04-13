import { Divider, Grid, Typography } from "@mui/material";
import { CustomerFeedbacksTestData } from "../TestData";
import { getReviewsStyles } from "./ReviewsStyles";
import { useEffect, useState } from "react";
import ReviewsCard from "../../../components/Card/ReviewsCard";
import useOpenStore from "../../../store/useOpenStore";

const Reviews = () => {
  const CustomerFeedbacks = CustomerFeedbacksTestData;
  const { open } = useOpenStore();
  const styles = getReviewsStyles(open);
  const [visibleReviews, setVisibleReviews] = useState(CustomerFeedbacks.slice(0, 5));

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleReviews(prevReviews => {
        const nextIndex = (CustomerFeedbacks.indexOf(prevReviews[0]) + 1) % CustomerFeedbacks.length;
        const newVisibleReviews = [...prevReviews.slice(1)];
        newVisibleReviews.push(CustomerFeedbacks[(nextIndex + 3) % CustomerFeedbacks.length]);
        return newVisibleReviews;
      });
    }, 5000);
    setVisibleReviews(CustomerFeedbacks.slice(0, open ? 4 : 5));
    return () => clearInterval(interval);
  }, [open]);

  const CustomerReviews: Function = () => {
    return (
      <div style={{ overflow: "hidden", width: "100%" }}>
        <Grid container spacing={2} justifyContent="center" sx={styles.grid1}>
          {visibleReviews.map((feedback, index) => (
            <Grid key={index} sx={styles.grid2}>
              <ReviewsCard
                name={feedback.name}
                date={feedback.date}
                review={feedback.review}
                rating={feedback.rating}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  return (
    <>
      <Divider sx={styles.divider} />
      <Grid container spacing={2} justifyContent="center">
        <Typography variant="h2" fontWeight="bold" component="div" sx={styles.typography}>
          Customer Reviews
        </Typography>
      </Grid>
      <Grid>{CustomerReviews()}</Grid>
    </>
  );
};

export default Reviews;
