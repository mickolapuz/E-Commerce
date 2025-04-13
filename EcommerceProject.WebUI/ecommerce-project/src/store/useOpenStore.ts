import { create } from "zustand";
import { OpenStoreProps } from "../models/StoreProps/OpenStoreProps";

const useOpenStore = create<OpenStoreProps>(set => ({
  open: false,
  setOpen: (value: boolean) => set({ open: value })
}));

export default useOpenStore;
