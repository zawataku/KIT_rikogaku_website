import React from "react";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <div className="hero h-[500px] lg:h-[400px] bg-base-100">
            <motion.div
                variants={{
                    offscreen: { // 画面外の場合のスタイル
                        y: 100,
                        opacity: 0,
                    },
                    onscreen: { // 画面内の場合のスタイル
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 1,
                        },
                    },
                }}
                initial="offscreen" // 初期表示はoffscreen
                whileInView="onscreen" // 画面内に入ったらonscreen
                viewport={{ once: false, amount: 0 }}
            >
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/img/2020_rikougaku.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="about">
                        <h1 className="text-5xl font-bold lg:block hidden">理工学基礎プロジェクトとは？</h1>
                        <h1 className="text-3xl font-bold lg:hidden pb-2">理工学基礎プロジェクトとは？</h1>{/*スマホ用表示*/}
                        <p className="pt-6 pb-4">1人1つの「身の周りから数理工学分野の意義あるテーマ」を見つけ，理学・工学の分野から設計，開発，作成することを通して，数理工の分野での技術力を身につけていく活動を行っています．</p>
                        <p className="pb-6">学生と教職員が理学・工学の分野を通じて交流をすることで，分野や世代を超えた学生の成長につなげることを目的としています．</p>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default About;