import React from "react";

export default function Header() {
    return (
        <header className="header w-full absolute z-30 py-1 px-14 h-20 content-center flex flex-wrap justify-between font-bold text-white bg-gradient-to-b from-black from-5%">
            <p className="text-3xl">金沢工業大学　理工学基礎プロジェクト</p>
            <div className="flex text-lg">
                <a className="block mx-5" href="/about">プロジェクト概要</a>
                <a className="block mx-5" href="/activity">活動内容</a>
                <a className="block mx-5" href="/access">アクセス</a>
            </div>
        </header>
    )
}