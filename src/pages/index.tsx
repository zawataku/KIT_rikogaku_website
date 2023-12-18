import React from "react";
import Link from "next/link";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const Home = () => {
  return (
    <div className="h-screen">
      <Header></Header>
      <div className="h-screen"></div>
      <Footer></Footer>
    </div>  
  )
};
export default Home;