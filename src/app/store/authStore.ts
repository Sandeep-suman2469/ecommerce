import { create } from "zustand";
import { setCookie, getCookie, removeCookie } from "react-use-cookie";


interface User {
  email: string;
  token?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;

  signup: (fullName: string, email: string, password: string, confirmPassword: string ) => Promise<{ success: boolean; message?: string }>;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  changePassword: (oldPassword: string, newPassword: string) => Promise<{ success: boolean; message?: string }>;
  forgotPassword: (email: string) => Promise<{ success: boolean; message?: string }>;
  verifyEmail: (token: string) => Promise<{ success: boolean; message?: string }>;
  checkAuth: () => void;
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
    return { success: true };
    console.log("Signup successful:", data.data);
  } catch (err: any) {
    set({ error: err.message, loading: false });
    return { success: false, message: err.message}
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
    console.log("Login response:", data);

    if (!res.ok || !data.success) {
      const message = data.detail || data.message || "Invalid credentials";
      set({ error: message, loading: false });
      return { success: false, message };
    }

    const token = data.data.access_token;
    const userId = data.data.user.id;
   // const userEmail = data.data.user.email;
 
    
    // setCookie("token", token, { days: 1, path: "/" });
    // console.log(" Token after re-set:", getCookie("token"));

    removeCookie("token");
    console.log("After removeCookie:", getCookie("token"));
   
    setCookie("token", token, { days: 1, path: "/" });
    setCookie("userId", String(userId), { days: 1, path: "/" });


    console.log(" New token set:", getCookie("token"));


    set({ user: { email, token }, loading: false });

    console.log("token",token);
    console.log("token123",userId);
  
    return { success: true };
  } catch (err: any) {
    set({ error: err.message, loading: false });
    return { success: false, message: err.message };
  }
},
  
 changePassword: async (oldPassword: string, newPassword: string) => {
  set({ loading: true, error: null });

  try {
    const token = getCookie("token");
    if (!token) {
      throw new Error("You must be logged in to change password");
    }

    const res = await fetch("http://localhost:8000/api/users/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, 
      },
      body: JSON.stringify({
        old_password: oldPassword,  
        new_password: newPassword,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      const message = data.detail || "Password change failed";
      set({ error: message, loading: false });
      return { success: false, message };
    }

    set({ loading: false });
    console.log("Password changed successfully:", data);
    return { success: true };
    
  } catch (err: any) {
    set({ error: err.message, loading: false });
    return { success: false, message: err.message };
  }
},
  forgotPassword: async (email: string) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("http://localhost:8000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      console.log("Forgot Password response:", data);

      if (!res.ok) {
        const message = data.detail || data.message || "Failed to send reset email";
        set({ error: message, loading: false });
        return { success: false, message };
      }

      set({ loading: false });
      return { success: true, message: data.message || "Password reset link sent" };
    } catch (err: any) {
      set({ error: err.message, loading: false });
      return { success: false, message: err.message };
    }
  },

  verifyEmail: async (token) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`http://localhost:8000/api/auth/verify-email?token=${token}`, {
        method: "GET",
      });

      const data = await res.json();
      console.log("Verify Email response:", data);

      if (!res.ok) {
        const message = data.detail || "Email verification failed";
        set({ error: message, loading: false });
        return { success: false, message };
      }

      set({ loading: false });
      return { success: true, message: data.message || "Email verified successfully" };
    } catch (err: any) {
      set({ error: err.message, loading: false });
      return { success: false, message: err.message };
    }
  },

  logout: () => {
    removeCookie("token");
    removeCookie("userId");
    set({ user: null });
  },

  checkAuth: () => {
    const token = getCookie("token");
    if (token) {
      set({ user: { email: "", token } });
    } else {
      set({ user: null });
    }
  },
}));
