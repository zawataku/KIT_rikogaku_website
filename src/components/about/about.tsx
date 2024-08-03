import React from "react";

export default function About() {
    const basePath = process.env.BASE_PATH || '';
    return (
        <div className="w-full bg-blue-900 pb-20 pt-40 lg:py-40" id="about">
            <div className="about hidden text-center text-2xl text-white lg:block">
                <p className="my-3">本プロジェクトでは「身の周りから数理工学分野の意義あるテーマ」を見つけ、</p>
                <p className="my-3">理学・工学の分野から設計・開発・作成することを通して</p>
                <p className="my-3">数理工の分野での技術力を身につけていく活動を行います。</p>
            </div>
            <div className="about px-5 text-center text-[5vw] leading-relaxed text-white md:text-2xl lg:hidden">
                <p className="my-3">本プロジェクトでは「身の周りから数理工学分野の意義あるテーマ」を見つけ、理学・工学の分野から設計・開発・作成することを通して、数理工の分野での技術力を身につけていく活動を行います。</p>
            </div>
            <div className="about my-20 px-2 text-center text-[8vw] text-white lg:text-[6vw]">
                <p className="my-3">理学と工学の融合。</p>
                <p className="my-3">創造の喜びを体感せよ。</p>
            </div>
            <div className="about mt-20 flex justify-center px-5 lg:my-20">
                <img className="mx-auto w-full rounded-3xl lg:w-1/2" src={`${basePath}/img/2020_rikogaku.webp`} alt="理工学基礎プロジェクト2020年" />
            </div>
        </div>
    )
}
