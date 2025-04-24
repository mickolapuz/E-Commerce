import { SxProps } from "@mui/material";

export interface BoxProps {
  order: string;
  orderCount?: number;
  price: number;
  onDelete: () => void;
  sx?: SxProps;
}
