import { create } from "zustand";
import { getCookie } from "react-use-cookie";
import { useProductStore } from "./productStore";

interface CartItem {
  id: number; // cart ID
  product_id: number;
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  loading: boolean;
  selectedItems: Record<number, boolean>;
  fetchCart: () => Promise<void>;
  addToCart: (product: any) => Promise<void>;
  updateQuantity: (id: number, amount: number) => Promise<void>;
  toggleSelect: (id: number) => void;
  subtotal: number;
}



export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  loading: false,
  selectedItems: {},

 fetchCart: async () => {
  set({ loading: true });
  try {
    const token = getCookie("token");
    console.log("Token before fetch:", token);

    if (!token) {
      throw new Error("No token found. Please log in again.");
    }


    const {  fetchProducts, fetchAllProductMedia } = useProductStore.getState();

    let { products } = useProductStore.getState();

    if (!products || products.length === 0) {
      await fetchProducts();
      await fetchAllProductMedia();
      products = useProductStore.getState().products;
    }else {
 
      await fetchAllProductMedia();
      products = useProductStore.getState().products;
    }
    
    const res = await fetch("http://localhost:8000/api/cart/list", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Cart API response:", data);

    const items = Array.isArray(data) ? data : [];

    const mappedData = items.map((item: any) => {
      const product = products.find((p: any) => p.id === item.product_id);

      const imageUrl =
          product?.media && product.media.length > 0
            ? product.media[0].url
            : "/placeholder.svg";
      
      
      return {
        id: item.id,
        product_id: item.product_id,
        name: product?.name || "Unnamed Product",
        price: product?.price || 0,
        size: item.size || "M",
        color: item.color || "N/A",
        image: imageUrl,
        quantity: item.product_quantity || 1,
      };
    });
    


    const initialSelection = mappedData.reduce(
      (acc: Record<number, boolean>, item: any) => {
        acc[item.id] = false;
        return acc;
      },
      {}
    );

    set({
      cartItems: mappedData,
      selectedItems: initialSelection,
      loading: false,
    });
  } catch (err) {
    console.error("Error fetching cart:", err);
    set({ loading: false });
  }
},


  addToCart: async (product: any) => {
    set({ loading: true });
    try {
      const token = getCookie("token");
      const res = await fetch("http://localhost:8000/api/cart/add", {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
           },
        body: JSON.stringify({
          product_id: product.id,
          product_quantity: 1,
          size: product.size || "M",
          color: product.color || "Default",
        }),
      });

      if (!res.ok) throw new Error("Failed to add to cart");

     
      await get().fetchCart();
    } catch (err) {
      console.error("Error adding to cart:", err);
    } finally {
      set({ loading: false });
    }
  },

  
  updateQuantity: async (id: number, amount: number) => {
    const currentItems = get().cartItems;
    const target = currentItems.find((item) => item.id === id);
    if (!target) return;

    const newQuantity = Math.max(1, target.quantity + amount);

    
    try {
      const token = getCookie("token");

      await fetch(`http://localhost:8000/api/cart/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_quantity: newQuantity }),
      });
    } catch (err) {
      console.error("Error updating quantity:", err);
    }

   
    const updatedItems = currentItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    set({ cartItems: updatedItems });
  },

  removeFromCart: async (id: number) => {
  try {
    const token = getCookie("token");
    if (!token) throw new Error("No token found. Please log in again.");

    console.log("Deleting cart item:", id); 

    const res = await fetch(`http://localhost:8000/api/cart/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Optional if your API needs auth
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to delete cart item. Status: ${res.status}`);
    }

    // ✅ Update local state immediately
    const updatedCart = get().cartItems.filter((item) => item.id !== id);
    set({ cartItems: updatedCart });

    console.log("Cart item deleted successfully:", id);
  } catch (err) {
    console.error("Error deleting cart item:", err);
  }
},


 
  toggleSelect: (id: number) => {
    const prev = get().selectedItems;
    set({
      selectedItems: { ...prev, [id]: !prev[id] },
    });
  },

 
  get subtotal() {
    const { cartItems, selectedItems } = get();
    return cartItems.reduce(
      (sum, item) =>
        selectedItems[item.id] ? sum + item.price * item.quantity : sum,
      0
    );
  },
}));
