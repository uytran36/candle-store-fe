"use client";
import React, { useEffect } from "react";
import "./globals.css";
import { useRouter } from "next/navigation";

const App: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      router.push("/login");
    }
  }, [router]);

  return <div className="App">hello worsssd</div>;
};

export default App;
