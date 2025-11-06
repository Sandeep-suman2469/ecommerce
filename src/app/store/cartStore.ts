import { create } from "zustand";

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
  updateQuantity: (id: number, amount: number) => Promise<void>;
  toggleSelect: (id: number) => void;
  subtotal: number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  loading: false,
  selectedItems: {},

  // ✅ Fetch cart items from backend
  fetchCart: async () => {
    set({ loading: true });
    try {
      const res = await fetch("http://localhost:8000/api/cart");
      const data = await res.json();

      const mappedData = data.map((item: any) => ({
        id: item.id,
        product_id: item.product_id,
        name: item.name || "Unnamed Product",
        price: item.price || 0,
        size: item.size || "M",
        color: item.color || "N/A",
        image: item.image || "/placeholder.svg",
        quantity: item.product_quantity || 1,
      }));

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

  // ✅ Update quantity in both backend and store
  updateQuantity: async (id: number, amount: number) => {
    const currentItems = get().cartItems;
    const target = currentItems.find((item) => item.id === id);
    if (!target) return;

    const newQuantity = Math.max(1, target.quantity + amount);

    // Update backend
    try {
      await fetch(`http://localhost:8000/api/cart/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_quantity: newQuantity }),
      });
    } catch (err) {
      console.error("Error updating quantity:", err);
    }

    // Update local state
    const updatedItems = currentItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    set({ cartItems: updatedItems });
  },

  // ✅ Toggle selected items
  toggleSelect: (id: number) => {
    const prev = get().selectedItems;
    set({
      selectedItems: { ...prev, [id]: !prev[id] },
    });
  },

  // ✅ Subtotal (computed dynamically)
  get subtotal() {
    const { cartItems, selectedItems } = get();
    return cartItems.reduce(
      (sum, item) =>
        selectedItems[item.id] ? sum + item.price * item.quantity : sum,
      0
    );
  },
}));
