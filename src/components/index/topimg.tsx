import React from "react";

export default function Topimg() {
  const basePath = process.env.BASE_PATH || '';
  return (
    <div className="relative h-screen w-full">
      <img className="absolute size-full object-cover opacity-70" src={`${basePath}/img/top.webp`} alt="トップ画像" />
      <div className="absolute left-0 top-0 size-full bg-black opacity-50"></div>
    </div>
  );
}
