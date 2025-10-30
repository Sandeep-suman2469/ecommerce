import { create } from "zustand";

interface User {
  email: string;
  token?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;

  signup: (fullName: string, email: string, password: string, confirmPassword: string ) => Promise<void>;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  signup: async (fullName, email, password, confirmPassword) => {
  set({ loading: true, error: null });
  try {
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }


    const [firstName, ...lastNameParts] = fullName.trim().split(" ");
    const lastName = lastNameParts.join(" ") || "";

    const res = await fetch("http://localhost:8000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || "Signup failed");

    set({ user: { email }, loading: false });
    console.log("Signup successful:", data);
  } catch (err: any) {
    set({ error: err.message, loading: false });
  }
},

login: async (email, password) => {
  set({ loading: true, error: null });
  try {
    const res = await fetch("http://localhost:8000/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      const message = data.detail || "Invalid credentials";
      set({ error: message, loading: false });
      return { success: false, message };
    }

    const token = data.access_token; 
    localStorage.setItem("token", token);
    set({ user: { email, token }, loading: false });

    return { success: true };
  } catch (err: any) {
    set({ error: err.message, loading: false });
    return { success: false, message: err.message };
  }
},


  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },
}));
