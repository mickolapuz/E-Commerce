import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { getFooterStyles } from "./FooterStyles";
import useOpenStore from "../../../store/useOpenStore";

const Footer = () => {
  const { open } = useOpenStore();
  const styles = getFooterStyles(open);

  return (
    <Box sx={styles.box}>
      <Container>
        <Grid container spacing={{ xs: 1, sm: 3 }} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
              About Us
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
              Contact
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
              FAQs
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
              Payment Methods
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
              We accept Visa, MasterCard, GCash, and more.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
              Follow Us
            </Typography>
            <Box display="flex" justifyContent="center" gap={1}>
              <IconButton href="#" color="inherit" size="small">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="inherit" size="small">
                <Instagram />
              </IconButton>
              <IconButton href="#" color="inherit" size="small">
                <Twitter />
              </IconButton>
              <IconButton href="#" color="inherit" size="small">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={2}>
          <Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
            © {new Date().getFullYear()} Bean & Co. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
