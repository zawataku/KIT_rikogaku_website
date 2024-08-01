import React from "react";

export default function Topimg() {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <img className="absolute w-full h-full object-cover opacity-70" src="/img/top.jpg" alt="トップ画像" />
      <div className="bg-black absolute top-0 left-0 w-full h-full opacity-50"></div>
    </div>
  );
}
