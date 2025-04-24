import React from "react";
import { Box, Button, Typography, Grid, IconButton } from "@mui/material";
import { BoxProps } from "../../models/ComponentProps/BoxProps";
import { COLOR_PALETTE } from "../../styles/constant";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const OrderBox: React.FC<BoxProps> = ({ order, orderCount = 1, price, onDelete, sx = {} }) => {
  return (
    <Box sx={sx}>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="flex-start"
        sx={{ mb: 1, ml: 1, mt: 1, width: "585px" }}
      >
        <Grid sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Grid sx={{ display: "flex", alignItems: "center" }}>
            <Grid sx={{ marginRight: "10px", display: "flex", alignItems: "center" }}>
              <Button
                variant="text"
                onClick={onDelete}
                disableRipple
                sx={{
                  padding: 0,
                  minWidth: 0,
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent"
                  },
                  "&:active": {
                    backgroundColor: "transparent"
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "transparent"
                  }
                }}
              >
                <ClearIcon sx={{ color: COLOR_PALETTE.darkEspresso.main, fontSize: "small" }} />
              </Button>
            </Grid>
            <Typography variant="body1" sx={{ color: COLOR_PALETTE.darkEspresso.main }}>
              {order} ({orderCount})
            </Typography>
          </Grid>
          <Grid alignSelf="flex-end">
            <Typography variant="body1" sx={{ color: COLOR_PALETTE.darkEspresso.main }}>
              ₱{price}
            </Typography>
          </Grid>
        </Grid>

        <Box display="flex" alignSelf="flex-end" gap={1} alignItems="center">
          <IconButton
            size="small"
            sx={{
              backgroundColor: COLOR_PALETTE.darkEspresso.main,
              width: 24,
              height: 24,
              "&:hover": {
                backgroundColor: COLOR_PALETTE.darkEspresso.main
              }
            }}
          >
            <RemoveIcon sx={{ fontSize: "16px", color: COLOR_PALETTE.white.main }} />
          </IconButton>
          <Typography variant="body2" minWidth={15} textAlign="center">
            {orderCount}
          </Typography>
          <IconButton
            size="small"
            sx={{
              backgroundColor: COLOR_PALETTE.darkEspresso.main,
              width: 24,
              height: 24,
              "&:hover": {
                backgroundColor: COLOR_PALETTE.darkEspresso.main
              }
            }}
          >
            <AddIcon sx={{ fontSize: "16px", color: COLOR_PALETTE.white.main }} />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
};

export default OrderBox;
