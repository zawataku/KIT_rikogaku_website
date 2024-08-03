import React from "react";

export default function Loading() {
    return (
        <div className="loading fixed left-0 top-0 z-50 flex h-screen w-screen place-items-center content-center justify-center overflow-hidden bg-white">
            <div className="w-1/3 lg:w-96">
                <img src="/img/kit_box2.webp" alt="金沢工業大学" />
            </div>
        </div>
    );
}
