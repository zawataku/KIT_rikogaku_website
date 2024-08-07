import React from "react";

export default function Access() {
    return (
        <div className="w-full bg-neutral-100 px-5 pb-20 pt-40 text-black lg:px-20" id="access">
            <div className="w-full text-center">
                <p className="my-5 text-5xl">アクセス</p>
                <p className="my-5 hidden lg:block lg:text-2xl">理工学基礎プロジェクトにぜひお越しください</p>
                <p className="my-5 text-xl lg:hidden">ぜひお越しください</p>
            </div>
            <div className="my-20 lg:mb-32">
                <div className="w-full">
                    <iframe className="h-[50vh] w-full rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.56697106916056!2d136.62965890718976!3d36.53125706438705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff835c981f997cf%3A0xa4ed2c2c058e23f5!2z6YeR5rKi5bel5qWt5aSn5a2mIDIz5Y-36aSo!5e0!3m2!1sja!2sjp!4v1676297842292!5m2!1sja!2sjp"></iframe>
                </div>
                <table className="my-10 w-full table-fixed text-[4vw] md:mx-auto md:text-xl lg:w-1/2">
                    <tbody>
                        <tr>
                            <td className="border-b-2 border-solid border-white bg-blue-900 px-5 py-6 text-white lg:px-10">活動期間・時間</td>
                            <td className="border-b-2 border-solid border-neutral-400 bg-neutral-200 px-5 py-6 lg:px-10">4月〜2月<br />隔週水曜5限</td>
                        </tr>
                        <tr>
                            <td className="border-b-2 border-solid border-white bg-blue-900 px-5 py-6 text-white lg:px-10">活動場所</td>
                            <td className="border-b-2 border-solid border-neutral-400 bg-neutral-200 px-5 py-6 lg:px-10">23号館412教室</td>
                        </tr>
                        <tr>
                            <td className="bg-blue-900 px-5 py-6 text-white lg:px-10">指導教員</td>
                            <td className="bg-neutral-200 px-5 py-6 lg:px-10">土地　邦生<br />西岡　圭太</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}