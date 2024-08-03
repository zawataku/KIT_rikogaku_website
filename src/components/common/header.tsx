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
        <header className="header hidden w-full absolute z-30 py-1 px-14 h-20 content-center lg:flex flex-wrap justify-between font-bold text-white bg-gradient-to-b from-black from-5%">
            <p className="text-3xl">金沢工業大学　理工学基礎プロジェクト</p>
            <div className="hidden lg:flex text-lg">
                <a className="block mx-5" href="#about" onClick={(e) => handleScroll(e, "about")}>プロジェクト概要</a>
                <a className="block mx-5" href="#activity" onClick={(e) => handleScroll(e, "activity")}>活動内容</a>
                <a className="block mx-5" href="#access" onClick={(e) => handleScroll(e, "access")}>アクセス</a>
            </div>
        </header>
    );
}