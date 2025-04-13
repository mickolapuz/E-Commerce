import { Divider, Grid, Typography } from "@mui/material";
import { getFeaturedCategoriesStyles } from "./FeaturedCategoriesStyles";
import CustomCard from "../../../components/Card/Card";
import { FeaturedDrinksTestData, FeaturedFoodsTestData, FeaturedProductsTestData } from "../TestData";
import useOpenStore from "../../../store/useOpenStore";

const FeaturedCategories = () => {
  const { open } = useOpenStore();
  const styles = getFeaturedCategoriesStyles(open);

  const RenderFeaturedDrinks: Function = () => {
    const FeaturedDrinks = FeaturedDrinksTestData;
    return (
      <>
        <Grid container spacing={2} justifyContent="center">
          {FeaturedDrinks.map(drink => (
            <Grid key={drink.id}>
              <CustomCard
                id={drink.id}
                name={drink.name}
                image={drink.image}
                description={drink.description}
                price={drink.price}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  const RenderFeaturedFood: Function = () => {
    const FeaturedFoods = FeaturedFoodsTestData;

    return (
      <>
        <Grid container spacing={2} justifyContent="center">
          {FeaturedFoods.map(food => (
            <Grid key={food.id}>
              <CustomCard
                id={food.id}
                name={food.name}
                image={food.image}
                description={food.description}
                price={food.price}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  const RenderFeaturedProducts: Function = () => {
    const FeaturedProducts = FeaturedProductsTestData;

    return (
      <>
        <Grid container spacing={2} justifyContent="center">
          {FeaturedProducts.map(product => (
            <Grid key={product.id}>
              <CustomCard
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  return (
    <>
      <Divider sx={styles.divider} />
      <Grid sx={styles.grid}>
        <Typography variant="h2" fontWeight="bold" component="div" sx={styles.typography}>
          Most Popular Drinks
        </Typography>
        {RenderFeaturedDrinks()}
      </Grid>
      <Divider sx={styles.divider} />
      <Grid sx={styles.grid}>
        <Typography variant="h2" fontWeight="bold" component="div" sx={styles.typography}>
          Most Popular Food
        </Typography>
        {RenderFeaturedFood()}
      </Grid>
      <Divider sx={styles.divider} />
      <Grid sx={styles.grid}>
        <Typography variant="h2" fontWeight="bold" component="div" sx={styles.typography}>
          Most Popular Products
        </Typography>
        {RenderFeaturedProducts()}
      </Grid>
    </>
  );
};

export default FeaturedCategories;
