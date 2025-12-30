"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState("login"); // login | signup

  const handleCandidateLogin = () => {
    router.push("/profile");
  };

  const handleCandidateSignup = () => {
    router.push("/profile");
  };

  const handleAdminLogin = () => {
    router.push("/admin");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome
        </h1>

        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <button
            className={`flex-1 py-2 text-center font-semibold ${
              tab === "login"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setTab("login")}
          >
            Candidate Login
          </button>

          <button
            className={`flex-1 py-2 text-center font-semibold ${
              tab === "signup"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setTab("signup")}
          >
            Candidate Signup
          </button>
        </div>

        {/* Candidate Login Form (visual only) */}
        {tab === "login" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email / Username"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3"
            />

            <button
              onClick={handleCandidateLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </div>
        )}

        {/* Candidate Signup Form */}
        {tab === "signup" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3"
            />

            <button
              onClick={handleCandidateSignup}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Create Account
            </button>
          </div>
        )}

        {/* Admin login */}
        <div className="mt-8 text-center">
          <button
            onClick={handleAdminLogin}
            className="text-sm text-gray-600 underline hover:text-gray-800"
          >
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
}
