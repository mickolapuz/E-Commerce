export const OrdersTestData = [
  {
    order: "White Chocolate Mocha",
    orderCount: 3,
    price: 80.0,
    onDelete: () => {
      console.log("Order deleted");
    }
  },
  {
    order: "Caramel Macchiato",
    orderCount: 2,
    price: 50.0,
    onDelete: () => {
      console.log("Order deleted");
    }
  },
  {
    order: "Vanilla Latte",
    orderCount: 1,
    price: 30.0,
    onDelete: () => {
      console.log("Order deleted");
    }
  }
];
