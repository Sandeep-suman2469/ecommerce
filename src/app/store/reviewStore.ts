import { create } from "zustand";

interface ReviewState {
  loading: boolean;
  error: string | null;
  success: boolean;

  submitReview: (rating: number, comment: string, product_id: number) => Promise<void>;
}

export const useReviewStore = create<ReviewState>((set) => ({
  loading: false,
  error: null,
  success: false,

  submitReview: async (rating, comment, product_id) => {
    set({ loading: true, error: null, success: false });

    try {
      const res = await fetch("http://localhost:8000/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include token if API requires authentication
          Authorization: `Bearer ${document.cookie
            .split("; ")
            .find((row) => row.startsWith("token="))
            ?.split("=")[1] || ""}`,
        },
        body: JSON.stringify({ rating, comment, product_id }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to submit review");

      set({ loading: false, success: true });
    } catch (err: any) {
      set({ loading: false, error: err.message });
    }
  },
}));
