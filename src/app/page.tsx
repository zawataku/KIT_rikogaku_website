import React from "react";

import Wrap from "@/components/wrap/wrap";
import About from "@/components/about/about";
import Products from "@/components/products/products";

export default function Home() {
  return (
    <div>
      <Wrap></Wrap>
      <About></About>
      <Products></Products>
    </div>
  );
}
