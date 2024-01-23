import React from "react";
import Link from "next/link";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Top_Img from "@/components/top_img";

export const Home = () => {
  return (
    <div className="h-screen">
      <Header></Header>
      <Top_Img></Top_Img>
      <Footer></Footer>
    </div>
  )
};
export default Home;