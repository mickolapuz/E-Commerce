export const getCardStyles = () => ({
  card: {
    maxWidth: 345,
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "2px solid #8B5E3C",
    borderRadius: "8px",
    margin: "16px"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  },
  description: {
    flexGrow: 1,
    minHeight: 50
  }
});
