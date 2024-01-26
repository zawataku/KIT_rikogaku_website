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
                    <img src="/img/drever_PC.bmp" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">理工学基礎プロジェクトとは？</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default About;