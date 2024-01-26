import React from "react";
import { useEffect } from "react";

import { scrollFadeIn } from "@/components/fadein";
import Header from "@/components/header";
import Top_Img from "@/components/top_img";
import About from "@/components/about_us";
import Footer from "@/components/footer";



export const Home = () => {
  useEffect(() => {
    scrollFadeIn();
  }, []);

  return (
    <div className="h-screen bg-base-200">
      <div className="header">
        <Header></Header>
      </div>

      <section>
        <Top_Img></Top_Img>
        <About></About>
      </section>

      <Footer></Footer>
    </div>
  )
};

export default Home;