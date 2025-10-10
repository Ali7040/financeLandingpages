"use client";
import React, { useState } from "react";
import Image from "next/image";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Use registered demo users from localStorage for login
function getDemoUsers() {
  try {
    return JSON.parse(localStorage.getItem("demoUsers") || "[]");
  } catch {
    return [];
  }
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const users = getDemoUsers();
    const found = users.find(
      (user: any) => user.email === email && user.password === password
    );

    if (found) {
      // Redirect to internal dashboard page
      router.push("/dashboard");
    } else {
      setError("Invalid credentials.");
    }
  }

  return (
    <div className="fixed inset-0 w-full h-screen flex flex-col md:flex-row bg-white">
      {/* Left: Image */}
      <div className="relative w-full md:w-1/2 h-screen overflow-hidden">
        <Image
          src="/login-bg.png"
          alt="Login Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      {/* Right: Login Box */}
      <div className="w-full md:w-1/2 flex items-center justify-center h-screen">
        <div className="w-full max-w-md mx-auto p-8 rounded-2xl shadow-xl bg-white">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Log in to your account</h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                autoComplete="current-password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <AnimatedButton type="submit" className="w-full py-3 text-lg">
              Log In
            </AnimatedButton>
          </form>
          {error && <div className="mt-4 text-red-600 font-semibold">{error}</div>}
          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <AnimatedButton
            className="w-full py-3 bg-red-400 text-white font-bold rounded-xl shadow hover:bg-red-500/90 transition text-lg flex items-center justify-center gap-2"
            onClick={() => alert("Google login is demo only.")}
          >
            <svg className="w-6 h-6" viewBox="0 0 32 32"><path fill="#fff" d="M32 16.3c0-1.2-.1-2.3-.3-3.4H16v6.5h9c-.4 2.1-1.7 3.9-3.5 5.1v4.2h5.7c3.3-3 5.1-7.4 5.1-12.4z"/><path fill="#fff" d="M16 32c4.4 0 8.1-1.4 10.8-3.8l-5.1-4.2c-1.5 1-3.4 1.7-5.7 1.7-4.4 0-8-2.9-9.3-6.7H1.3v4.3C4 28.9 9.6 32 16 32z"/><path fill="#fff" d="M6.7 19.9c-.4-1.1-.7-2.3-.7-3.6 0-1.2.3-2.5.7-3.6v-4.3H1.3C.5 10.7 0 13.3 0 16s.5 5.3 1.3 7.6l5.4-4.3z"/><path fill="#fff" d="M16 6.3c2.4 0 4.5.8 6.2 2.4l4.6-4.6C24.1 1.4 20.4 0 16 0 9.6 0 4 3.1 1.3 7.6l5.4 4.3c1.3-3.8 4.9-6.6 9.3-6.6z"/></svg>
            Continue with Google
          </AnimatedButton>
          <div className="flex justify-between text-sm mt-4">
            <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
            <a href="#" className="text-gray-500 hover:underline">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}