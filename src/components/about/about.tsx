import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-slate-50 content-center">
            <div className="container m-auto px-6 text-slate-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img src="/img/about/2020_rikogaku.png" alt="image" className="rounded-xl"></img>
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-slate-900 font-bold md:text-4xl">理工学基礎プロジェクトとは？</h2>
                        <p className="mt-6 text-slate-600 text-lg">1人1つの「身の周りから数理工学分野の意義あるテーマ」を見つけ，理学・工学の分野から設計，開発，作成することを通して，数理工の分野での技術力を身につけていく活動を行っています．</p>
                        <p className="mt-4 text-slate-600 text-lg"> 学生と教職員が理学・工学の分野を通じて交流をすることで，分野や世代を超えた学生の成長につなげることを目的としています．</p>
                    </div>
                </div>
            </div>
        </div>
    )
}