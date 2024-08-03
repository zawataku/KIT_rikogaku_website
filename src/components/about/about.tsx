import React from "react";

export default function About() {
    return (
        <div className="w-full bg-blue-900 pt-40 pb-20 lg:py-40" id="about">
            <div className="about text-center text-white text-2xl hidden lg:block">
                <p className="my-3">本プロジェクトでは「身の周りから数理工学分野の意義あるテーマ」を見つけ、</p>
                <p className="my-3">理学・工学の分野から設計・開発・作成することを通して</p>
                <p className="my-3">数理工の分野での技術力を身につけていく活動を行います。</p>
            </div>
            <div className="about text-center text-white text-[5vw] md:text-2xl lg:hidden px-5 leading-relaxed">
                <p className="my-3">本プロジェクトでは「身の周りから数理工学分野の意義あるテーマ」を見つけ、理学・工学の分野から設計・開発・作成することを通して、数理工の分野での技術力を身につけていく活動を行います。</p>
            </div>
            <div className="about text-center text-white text-[8vw] lg:text-[6vw] my-20 px-2">
                <p className="my-3">理学と工学の融合。</p>
                <p className="my-3">創造の喜びを体感せよ。</p>
            </div>
            <div className="about flex justify-center mt-20 lg:my-20 px-5">
                <img className="w-full lg:w-1/2 mx-auto rounded-3xl" src="/img/2020_rikougaku.jpg" alt="理工学基礎プロジェクト2020年"/>
            </div>
        </div>
    )
}
