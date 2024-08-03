import React from "react";

export default function Header() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="header absolute z-30 block h-24 w-full flex-wrap content-center justify-between bg-gradient-to-b from-black from-5% p-3 text-center font-bold text-white md:px-14 lg:flex lg:text-left">
            <p className="text-[6vw] md:text-3xl">KIT 理工学基礎プロジェクト</p>
            <div className="hidden flex-wrap content-center text-lg lg:flex">
                <a className="mx-5 block duration-300 ease-in-out hover:text-neutral-500" href="#about" onClick={(e) => handleScroll(e, "about")}>プロジェクト概要</a>
                <a className="mx-5 block duration-300 ease-in-out hover:text-neutral-500" href="#activity" onClick={(e) => handleScroll(e, "activity")}>活動内容</a>
                <a className="mx-5 block duration-300 ease-in-out hover:text-neutral-500" href="#access" onClick={(e) => handleScroll(e, "access")}>アクセス</a>
            </div>
        </header>
    );
}