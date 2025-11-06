import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  price: number;
  category_id: number;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

let store: any;

export const useProductStore =
  store ||
  (store = create<ProductState>((set) => ({
    products: [],
    loading: false,
    error: null,

    fetchProducts: async () => {
      set({ loading: true, error: null });
      try {
        const res = await fetch("http://localhost:8000/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");

        const result = await res.json();

        const data: Product[] = result.data || [];
        set({ products: data, loading: false });
      } catch (err: any) {
        set({ error: err.message, loading: false });
      }
    },
  })));
