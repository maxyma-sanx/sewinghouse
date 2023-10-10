import { RootState } from "../store";

import { Product } from "@/types";

export const selectFavoriteItems = (state: RootState): Product[] => state.favorite.items;
