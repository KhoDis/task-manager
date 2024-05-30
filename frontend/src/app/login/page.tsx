"use client";

import React, { useState } from "react";
import { useLoginMutation } from "@/services/api";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await login({ username, password });
    if (data) {
      localStorage.setItem("token", data.token);
      await router.push("/tasks");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto max-w-xs mt-8 p-4 bg-white rounded shadow text-center space-y-4 border border-gray-200 border-solid"
    >
      <h1 className="text-4xl font-bold">Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border border-gray-200 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-200 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
      <button
        onClick={() => router.push("/")}
        className="w-full bg-transparent text-blue-500 font-bold py-2 px-4 rounded border border-blue-500"
      >
        Back to Home
      </button>
    </form>
  );
};

export default Login;
