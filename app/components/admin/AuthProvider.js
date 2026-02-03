"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function AuthProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get token from sessionStorage on mount
  useEffect(() => {
    const storedToken = sessionStorage.getItem("adminToken");
    const expiry = sessionStorage.getItem("tokenExpiry");
    
    // Check if token exists and hasn't expired
    if (storedToken && expiry && parseInt(expiry) > Date.now()) {
      setToken(storedToken);
    } else {
      // Clear invalid token
      sessionStorage.removeItem("adminToken");
      sessionStorage.removeItem("tokenExpiry");
      
      // Redirect to login if not already there
      if (!pathname.includes("/login")) {
        router.push(`${pathname.split("/admin")[0]}/admin/login`);
      }
    }
    
    setIsLoading(false);
  }, [pathname, router]);

  // Verify token with Convex
  const sessionValid = useQuery(
    api.auth.verifySession,
    token ? { token } : "skip"
  );

  useEffect(() => {
    if (sessionValid !== undefined && !sessionValid.valid && !pathname.includes("/login")) {
      // Token is invalid, redirect to login
      sessionStorage.removeItem("adminToken");
      sessionStorage.removeItem("tokenExpiry");
      router.push(`${pathname.split("/admin")[0]}/admin/login`);
    }
  }, [sessionValid, pathname, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}
