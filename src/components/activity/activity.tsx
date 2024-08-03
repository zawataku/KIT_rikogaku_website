import React from "react";

export default function Activity() {
    const basePath = process.env.BASE_PATH || '';
    return (
        <div className="w-full bg-white px-5 py-40 lg:px-20" id="activity">
            <div className="w-full text-center">
                <p className="my-5 text-5xl">活動内容</p>
                <p className="my-5 text-xl lg:text-2xl">活動内容・研究内容をご紹介します</p>
            </div>
            <div className="mb-10 mt-20 lg:mb-32 lg:flex">
                <div className="my-auto w-full lg:px-5">
                    <img className="rounded-3xl" src={`${basePath}/img/activity.webp`} alt="活動内容" />
                </div>
                <div className="mt-10 hidden w-full lg:my-auto lg:block lg:px-5">
                    <ul className="text-xl">
                        <li className="activity mb-5 rounded-3xl bg-neutral-200 p-8">Djangoを用いた災害対策アプリ開発</li>
                        <li className="activity mb-5 rounded-3xl bg-neutral-200 p-8">故障した中古ドローンの修理</li>
                        <li className="activity mb-5 rounded-3xl bg-neutral-200 p-8">Raspberry Piを用いたオーディオDAC製作</li>
                        <li className="activity mt-5 rounded-3xl bg-neutral-200 p-8">Next.jsを用いたホームページ作成</li>
                    </ul>
                </div>
                <div className="mt-10 w-full lg:hidden">
                    <ul className="text-[4vw]">
                        <li className="activity_mb mb-5 rounded-3xl bg-neutral-200 px-3 py-8">Djangoを用いた災害対策アプリ開発</li>
                        <li className="activity_mb mb-5 rounded-3xl bg-neutral-200 px-3 py-8">故障した中古ドローンの修理</li>
                        <li className="activity_mb mb-5 rounded-3xl bg-neutral-200 px-3 py-8">Raspberry Piを用いたオーディオDAC製作</li>
                        <li className="activity_mb mt-5 rounded-3xl bg-neutral-200 px-3 py-8">Next.jsを用いたホームページ作成</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}