import React from "react";
import { motion } from "framer-motion";

export const Product = () => {
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
                    <h1 className="text-5xl font-bold lg:block hidden">理工学基礎プロジェクトとは？</h1>
                </div>

            </motion.div>
        </div>
    )
}

export default Product;