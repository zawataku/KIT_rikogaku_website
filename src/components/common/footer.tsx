import React from "react";

export default function Footer() {
    return (
        <div className="bottom-0 w-full bg-blue-900 px-4 py-10 text-white md:px-10">
            <div className="text-center">
                <p className="my-5 text-[5vw] md:text-2xl">金沢工業大学　理工学基礎プロジェクト</p>
                <p className="my-2 text-[4vw] md:text-lg">〒921-8501　石川県野々市市扇が丘7-1</p>
                <a className="my-2 block text-[4vw] md:text-lg" href="mailto:ktochi@neptune.kanazawa-it.ac.jp">MAIL：ktochi@neptune.kanazawa-it.ac.jp</a>
                <p className="mb-3 mt-10 text-lg">Copyright(C) 2024 Kanazawa Institute of Technology. All rights reserved.</p>
            </div>
        </div>
    )
}