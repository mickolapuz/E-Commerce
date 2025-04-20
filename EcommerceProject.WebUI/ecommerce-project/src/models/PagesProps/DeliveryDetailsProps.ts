import { CART_DEFAULT_FORM_VALUES } from "../../pages/Cart/Cart";

export interface DeliveryDetailsProps {
  formValues: typeof CART_DEFAULT_FORM_VALUES;
  setFormValues: React.Dispatch<React.SetStateAction<typeof CART_DEFAULT_FORM_VALUES>>;
}
