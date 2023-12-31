import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
  title: "How It Works",
  description: "Ofelos Larvasida Ball",
};

function layout({ children }) {
  return (
    <div className="w-full bg-gradient-to-b from-[#77C4FD] to-[#5F9AC40F]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
