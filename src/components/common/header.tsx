import React from "react";

export default function Header() {
    return (
        <header className="header w-full absolute z-30 py-3 px-14 h-20 content-center flex flex-wrap justify-between font-bold text-white bg-gradient-to-b from-black from-5%">
            <p className="text-2xl">金沢工業大学　理工学基礎プロジェクト</p>
            <div className="flex">
                <a className="block mx-3" href="/about">プロジェクト概要</a>
                <a className="block mx-3" href="/activity">活動内容</a>
                <a className="block mx-3" href="/access">アクセス</a>
            </div>
        </header>
    )
}