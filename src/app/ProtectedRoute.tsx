"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "./store/authStore"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!user?.token) {
      router.replace("/login"); 
    }
  }, [user, router]);

  if (!user?.token) return null; 
  return <>{children}</>;
}
