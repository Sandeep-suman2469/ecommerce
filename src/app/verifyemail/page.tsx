"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { verifyEmail, loading } = useAuthStore();

  useEffect(() => {
  if (token) {
    verifyEmail(token).then((res) => {
      if (res.success) {
        toast.success(res.message ?? "Email verified!");
        setTimeout(() => router.push("/login"), 1000);
      } else {
        toast.error(res.message ?? "Something went wrong");
      }
    });
  }
}, [token]);


  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <p>Verifying your email...</p>
      ) : (
        <p>Check your email verification result above.</p>
      )}
    </div>
  );
}
