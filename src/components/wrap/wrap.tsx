import React from "react";

export default function Wrap() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(/img/wrap/top_img.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                    <h1 className="mb-5 hidden text-7xl font-bold text-slate-50 lg:block">Welcome to 理工学</h1>
                    <h1 className="mb-10 text-5xl font-bold text-slate-50 lg:hidden">Welcome to <br></br>理工学</h1>
                    <p className="mb-5 text-2xl text-slate-50">理工学基礎プロジェクトにようこそ</p>
                </div>
            </div>
        </div>
    );
}