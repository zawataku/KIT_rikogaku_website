import React from "react";

export const Top_Img = () => {
    return (
        <div className="hero h-[600px] lg:h-[500px]" style={{ backgroundImage: 'url(/img/top_img.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>

            <div className="text-center text-neutral-content">
                <h1 className="mb-5 text-7xl p-3 lg:block hidden text-shadow">ここでしかできない体験を</h1>
                <h1 className="mb-5 text-4xl p-3 lg:hidden text-shadow">ここでしかできない<br />体験を</h1>{/*スマホ用表示*/}

                <div className="max-w-2xl mt-0 mb-0 mr-auto ml-auto">
                    <p className="mt-10 mb-5 text-xl mr-2 ml-2 lg:block hidden">「身の周りから数理工学分野の意義あるテーマ」を見つけ，理学・工学の分野から設計，開発を行い，自分だけの製作物を創りあげませんか？</p>
                    <p className="mt-10 mb-5 text-md mr-5 ml-5 lg:hidden">「身の周りから数理工学分野の意義あるテーマ」を見つけ，理学・工学の分野から設計，開発を行い，自分だけの製作物を創りあげませんか？</p>{/*スマホ用表示*/}
                </div>
            </div>
        </div>
    );
};

export default Top_Img;