"use client";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="rounded-2xl shadow-xl bg-white p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to your Dashboard</h1>
        <p className="text-gray-700 text-lg mb-4">
          You are now logged in! Here you can access your account information, track investments, and more.
        </p>
      </div>
    </div>
  );
}