export const getReviewsCardStyles = () => ({
  card: {
    width: 350,
    height: 200,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: 3
  },
  cardContent: {
    flex: "0 0 auto"
  },
  rating: {
    color: "#FFD700",
    "& .MuiRating-iconEmpty": {
      color: "#C0C0C0"
    }
  },
  box: {
    flex: "1 1 auto",
    overflowY: "auto",
    padding: 2,
    backgroundColor: "#f9f9f9"
  }
});
