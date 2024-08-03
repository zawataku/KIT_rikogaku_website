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
        <header className="header block w-full absolute z-30 py-3 px-3 md:px-14 h-24 content-center lg:flex flex-wrap justify-between font-bold text-white bg-gradient-to-b from-black from-5% text-center lg:text-left">
            <p className="text-[6vw] md:text-3xl">KIT 理工学基礎プロジェクト</p>
            <div className="hidden lg:flex text-lg content-center flex-wrap">
                <a className="block mx-5 hover:text-neutral-500 ease-in-out duration-300" href="#about" onClick={(e) => handleScroll(e, "about")}>プロジェクト概要</a>
                <a className="block mx-5 hover:text-neutral-500 ease-in-out duration-300" href="#activity" onClick={(e) => handleScroll(e, "activity")}>活動内容</a>
                <a className="block mx-5 hover:text-neutral-500 ease-in-out duration-300" href="#access" onClick={(e) => handleScroll(e, "access")}>アクセス</a>
            </div>
        </header>
    );
}