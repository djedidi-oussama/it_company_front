'use client';
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Login from "@/Admin_Components/Login";

function LoginPage() {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard if authenticated
    if (isAuthenticated && !loading) {
      router.push("/dashboard"); // Redirect to dashboard or another page
    }
  }, [isAuthenticated, router, loading]);

  return !isAuthenticated && !loading ? <Login /> : null;
}

export default LoginPage;
