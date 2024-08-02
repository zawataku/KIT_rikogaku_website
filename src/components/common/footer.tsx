import React from "react";

export default function Footer() {
    return (
        <div className="w-full bottom-0 bg-blue-900 py-10 px-10 text-white">
            <div className="text-center">
                <p className="text-2xl my-5">金沢工業大学　理工学基礎プロジェクト</p>
                <p className="text-lg my-2">〒921-8501　石川県野々市市扇が丘7-1</p>
                <a className="block text-lg my-2" href="mailto:ktochi@neptune.kanazawa-it.ac.jp">MAIL：ktochi@neptune.kanazawa-it.ac.jp</a>
                <p className="text-lg mt-10 mb-3">Copyright(C) 2024 Kanazawa Institute of Technology. All rights reserved.</p>
            </div>
        </div>
    )
}