import Grid from "@mui/material/Grid";
import MainBanner from "./HomeChildComponents/MainBanner";
import FeaturedCategories from "./HomeChildComponents/FeaturedCategories";
import Reviews from "./HomeChildComponents/Reviews";
import Footer from "./HomeChildComponents/Footer";

const Home = () => {
  const RenderMainBanner: Function = () => {
    return <MainBanner />;
  };

  const RenderFeaturedCategories: Function = () => {
    return <FeaturedCategories />;
  };

  const RenderReviews: Function = () => {
    return <Reviews />;
  };

  const RenderFooter: Function = () => {
    return <Footer />;
  };

  return (
    <div>
      <Grid container spacing={2} direction="column">
        <Grid>{RenderMainBanner()}</Grid>
        <Grid>{RenderFeaturedCategories()}</Grid>
        <Grid>{RenderReviews()}</Grid>
        <Grid>{RenderFooter()}</Grid>
      </Grid>
    </div>
  );
};

export default Home;
