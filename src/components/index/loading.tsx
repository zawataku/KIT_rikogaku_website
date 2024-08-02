import React from "react";

export default function Loading() {
    return (
        <div className="loading z-50 bg-white fixed top-0 left-0 w-[100vw] h-[100vh] overflow-hidden place-items-center justify-center content-center flex">
            <div className="w-1/3 lg:w-96">
                <img src="/img/kit_box2.png" alt="金沢工業大学" />
            </div>
        </div>
    );
}
