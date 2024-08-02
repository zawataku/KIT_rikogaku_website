import React from "react";

export default function Activity() {
    return (
        <div className="w-full bg-white py-40 px-20">
            <div className="w-full text-center">
                <p className="my-5 text-5xl">活動内容</p>
                <p className="my-5 text-2xl">特色ある活動内容・研究内容をご紹介します</p>
            </div>
            <div className="flex mt-20 mb-32">
                <div className="w-full px-5 my-auto">
                    <img className="rounded-3xl" src="/img/activity.jpg" alt="活動内容" />
                </div>
                <div className="w-full px-5 my-auto">
                    <ul className="text-xl">
                        <li className="activity bg-neutral-200 p-8 rounded-3xl mb-5">Djangoを用いた災害対策アプリ開発</li>
                        <li className="activity bg-neutral-200 p-8 rounded-3xl mb-5">故障した中古ドローンの修理</li>
                        <li className="activity bg-neutral-200 p-8 rounded-3xl mb-5">Raspberry Piを用いたオーディオDAC製作</li>
                        <li className="activity bg-neutral-200 p-8 rounded-3xl mt-5">Next.jsを用いたホームページ作成</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}