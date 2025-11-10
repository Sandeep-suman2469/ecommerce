

import { create } from "zustand";
import { useProductStore, Product } from "./productStore";

export interface WishlistItem {
  id: number;
  product_id: number;
  created_at: string;
  product?: Product;
}

interface WishlistState {
  wishlist: WishlistItem[];
  loading: boolean;
  error: string | null;
  fetchWishlist: (userId: number, token: string) => Promise<void>;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  wishlist: [],
  loading: false,
  error: null,

  fetchWishlist: async (userId: number, token: string) => {
    set({ loading: true, error: null });

    try {
      const res = await fetch(
        `http://localhost:8000/api/wishlist/${userId}?skip=0&limit=100`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch wishlist");

      const json = await res.json();
      const wishlistData: WishlistItem[] = json.data;

      const { products, fetchProducts } = useProductStore.getState();
      if (!products || products.length === 0) {
        await fetchProducts();
      }

      const allProducts = useProductStore.getState().products;
      const wishlistWithDetails = wishlistData.map((item) => ({
        ...item,
        product: allProducts.find((p: Product) => p.id === item.product_id),
      }));

      set({ wishlist: wishlistWithDetails, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));


