import { Divider, Grid, Typography } from "@mui/material";
import OrderBox from "../../../components/Box/OrderBox";
import { getOrderDetailsStyles } from "./OrderDetailsStyles";
import { OrdersTestData } from "../TestData";

const OrderDetails = () => {
  const testData = OrdersTestData;
  const styles = getOrderDetailsStyles();

  const handleDelete = () => {
    console.log("Order deleted");
  };

  return (
    <div>
      <Typography variant="h4" sx={styles.title}>
        Order Details:
      </Typography>
      {testData ? (
        testData.map((orderData, index) => (
          <Grid key={index} sx={styles.gridOrderBox}>
            {index !== 0 && <Divider />}
            <OrderBox
              order={orderData.order}
              orderCount={orderData.orderCount}
              price={orderData.price}
              onDelete={handleDelete}
              sx={styles.orderBox}
            />
          </Grid>
        ))
      ) : (
        <div>
          <Typography variant="h6" sx={styles.noOrders}>
            No Orders Yet
          </Typography>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
