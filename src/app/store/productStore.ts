

import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock?: number;
  rating?: number;
  category_id: number;
  media?: Media[]; 
}

export interface Media {
  id: number;
  product_id: number;
  url: string;
  type: "image" | "video";
}

interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  productMedia: Media[];
  loading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  fetchProductById: (id: number) => Promise<void>;
  fetchAllProductMedia: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  selectedProduct: null,
  productMedia: [],
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


  fetchProductById: async (id: number) => {
  set({ loading: true, error: null });
  try {
  
    const prodRes = await fetch(`http://localhost:8000/api/products/${id}`);
    const prodData = await prodRes.json();

  
    const mediaRes = await fetch(`http://localhost:8000/api/media/get/${id}`);

    let mediaData: any = [];
    const contentType = mediaRes.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {

      const json = await mediaRes.json();
      mediaData = json.data || [];
    } else if (contentType.startsWith("image/")) {
      
      const blob = await mediaRes.blob();
      const imageUrl = URL.createObjectURL(blob);
      mediaData = [{ type: "image", url: imageUrl }];
    } else {
      mediaData = [];
    }

    set({
      selectedProduct: prodData.data,
      productMedia: mediaData,
      loading: false,
    });
  } catch (err: any) {
    set({ error: err.message, loading: false });
  }
},

fetchAllProductMedia: async () => {
  try {
    const { products } = useProductStore.getState();

    
    const mediaResults = await Promise.all(
      products.map(async (product) => {
        try {
          const res = await fetch(`http://localhost:8000/api/media/get/${product.id}`);
          const contentType = res.headers.get("content-type") || "";
          let media: Media[] = [];

          if (contentType.includes("application/json")) {
            const json = await res.json();
            media = json.data || [];
          } else if (contentType.startsWith("image/")) {
            const blob = await res.blob();
            const imageUrl = URL.createObjectURL(blob);
            media = [{ type: "image",
              id: Date.now(),
              product_id: product.id,
               url: imageUrl }];
          }

          return { ...product, media };
        } catch {
          return { ...product, media: [] };
        }
      })
    );

    set({ products: mediaResults });
  } catch (err: any) {
    set({ error: err.message });
  }
},


}));

