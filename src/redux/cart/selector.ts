import { RootState } from "../store";

import { Product } from "@/types";

export const selectCartItems = (state: RootState): Product[] => state.cart.items;
