import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import { getMainBannerStyles } from "./MainBannerStyles";

const MainBanner = () => {
  const theme = useTheme();
  const styles = getMainBannerStyles(theme);

  const scrollToFooterSection = () => {
    const footerSection = document.getElementById("footer-section");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={styles.box1}>
      <Box sx={styles.box2} />
      <Container sx={styles.container}>
        <Typography variant="h4" fontWeight="bold" component="div" sx={styles.typography1}>
          Bean & Co.
        </Typography>
        <Typography variant="h6" sx={styles.typography2}>
          Your one-stop shop for all things coffee.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Button variant="contained" onClick={scrollToFooterSection} sx={styles.button1}>
            CONTACT US
          </Button>
          <Button variant="contained" onClick={scrollToFooterSection} sx={styles.button2}>
            SHOP NOW
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainBanner;
