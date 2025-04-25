import React from "react";
import { Box, Button, Typography, Grid, IconButton } from "@mui/material";
import { BoxProps } from "../../models/ComponentProps/BoxProps";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { getOrderBoxStyles } from "./OrderBoxStyles";

const OrderBox: React.FC<BoxProps> = ({ order, orderCount = 1, price, onDelete, sx = {} }) => {
  const styles = getOrderBoxStyles();

  return (
    <Box sx={sx}>
      <Grid container spacing={1} direction="column" alignItems="flex-start" sx={styles.grid1}>
        <Grid sx={styles.grid2}>
          <Grid sx={styles.grid3}>
            <Grid sx={styles.grid4}>
              <Button variant="text" onClick={onDelete} disableRipple sx={styles.clearButton}>
                <ClearIcon sx={styles.clearIcon} />
              </Button>
            </Grid>
            <Typography variant="body1" sx={styles.typography}>
              {order} ({orderCount})
            </Typography>
          </Grid>
          <Grid alignSelf="flex-end">
            <Typography variant="body1" sx={styles.typography}>
              ₱{price}
            </Typography>
          </Grid>
        </Grid>
        <Box display="flex" alignSelf="flex-end" gap={1} alignItems="center">
          <IconButton size="small" sx={styles.iconButton}>
            <RemoveIcon sx={styles.removeAddIcon} />
          </IconButton>
          <Typography variant="body2" minWidth={15} textAlign="center">
            {orderCount}
          </Typography>
          <IconButton size="small" sx={styles.iconButton}>
            <AddIcon sx={styles.removeAddIcon} />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
};

export default OrderBox;
